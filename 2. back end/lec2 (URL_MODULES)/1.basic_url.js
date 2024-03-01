console.log("hello");
const http = require('http');
const fs = require("fs");
const url = require("url") ; 

// npm  : node pacakage manager 

// note : now the original http module 
// does not recognize query
// in order to involve query 
// parameter in our server we have to install 
// url packages 
// run npm i url 


// the npm install code sees the dependencies in the 
// package.json and then install the dependencies 
// which are currently not stored in node modules 
// or if node modules does not exists then it will 
// create one folder named node modules and then will store 
// all the dependencies 


// now a folder of node modules has been created 
// and the code of url is now in the node modules directory 

const myserver = http.createServer((req, res) => {

   // to remove doubeling 
   if(req.url == "/favicon.ico") return res.end() ; 
   // Logging history in log.txt


   const myurl = url.parse(req.url) ; 
   console.log(myurl) ; 

   // now after studing the url object we notice that the 
   // the correct path is actually given by url object 
   // hence we should change current url from 
   // req.url --> myurl.path 

   const log = `${Date.now()} : received from : ${req.url} \n`;
   fs.appendFile("log.txt", log, (err, data) => {
      switch (myurl.pathname) {
         case '/':
            res.end('enter starting page');
            break;
         case '/home':
            res.end('entered the home page');
            break;
         case '/contact':
            res.end('entered the contact page');
            break;
         default:
            res.end('404 Not Found');
      }
   });
});

myserver.listen(8000, () => {
   console.log("Server started on port 8000");
});
