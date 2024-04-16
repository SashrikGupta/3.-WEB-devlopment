const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

const auth = nodemailer.createTransport({
   service: "gmail",
   secure: true,
   port: 465,
   auth: {
      user: "codeconnect.mail@gmail.com",
      pass: "edka lhlw sque qmgc"
   }
});

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.post('/mail', (req, res) => {
   const { mailId, subject, message } = req.body; // Assuming mailId, subject, and message are sent in the request body
   const receiver = {
      from: "codeconnect.mail@gmail.com",
      to: mailId,
      subject: subject,
      text: message
   };
   auth.sendMail(receiver, (err, emailResponse) => {
      if (err) {
         console.log(err);
         res.status(500).send("Error sending email");
      } else {
         console.log("Email sent successfully");
         res.status(200).send("Email sent successfully");
      }
   });
});

app.listen(8765, () => {
   console.log("Server started on port 8765");
});
