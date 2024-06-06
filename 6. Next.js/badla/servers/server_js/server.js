const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const upload = multer({ dest: 'uploads/' });


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyC2w_s0gzTC5bNkDeiOnloUdKf7RAIIlbM");

// ...

// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// ...


const summary = async ( text )=>{
   const prompt = text + "\n" + "write 10 mcq baesd  questions for the above text also provide answer key at end"

   const result = await model.generateContent(prompt);
   const response = await result.response;
   const ans = response.text();
   console.log(ans)
   return ans
}



// Ensure the 'uploads' directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

app.post('/upload', upload.single('video'), async (req, res) => {
    const filePath = path.join(__dirname, req.file.path);
    
    // Prepare the form data
    const formData = new FormData();
    formData.append('video', fs.createReadStream(filePath), req.file.originalname);

    try {
        console.log('Sending request to Flask server...');
        const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: formData.getHeaders(),
            timeout: 300000  // Timeout set to 5 minutes (300,000 ms)
        });
        console.log('Response from Flask server:', response.data.summary);
        // Send the summary from the Flask server back to the client
        const write = await summary(response.data.summary)
        res.json({answer : write});
    } catch (error) {
        console.error('Error uploading video to Flask server:', error);
        res.status(500).send('Error uploading video to Flask server');
    } finally {
        // Cleanup the uploaded file
        fs.unlinkSync(filePath);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
