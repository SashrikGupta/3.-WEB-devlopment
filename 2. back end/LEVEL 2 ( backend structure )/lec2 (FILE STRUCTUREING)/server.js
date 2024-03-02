const app = require('./app.js')

const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log("server has been started at port: 8000");
});