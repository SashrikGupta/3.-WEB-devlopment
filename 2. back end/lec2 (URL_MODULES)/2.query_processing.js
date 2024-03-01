console.log("hello");
const http = require('http');
const fs = require("fs");
const url = require("url") ; 

// query parameters and query processing  

const myserver = http.createServer((req, res) => {

   // to remove doubeling 
   if(req.url == "/favicon.ico") return res.end() ; 
   // Logging history in log.txt


   // for getting query paramaters we pass
   // true alh=ng with url that then allows 
   // url module to extract quesry from url 

   const myurl = url.parse(req.url , true) ; 
   console.log(myurl) ; 
   qp = myurl.query ;
   console.log(qp) ; 
   console.log(qp.num + qp.num2) ; 
   //eg : 
   // Url {
   //    protocol: null,
   //    slashes: null,
   //    auth: null,
   //    host: null,
   //    port: null,
   //    hostname: null,
   //    hash: null,
   //    search: '?num=1&num2=5',
   //    query: [Object: null prototype] { num: '1', num2: '5' },
   //    pathname: '/home',
   //    path: '/home?num=1&num2=5',
   //    href: '/home?num=1&num2=5'
   //  }


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
