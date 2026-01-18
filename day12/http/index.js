const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

// http.createServer((req,res)=>{
//     res.end("Hello.I am Your first Server");
// }).listen(3000);

// const myServer = http.createServer((req,res)=>{
//     res.end("Hello.I am Your first Server");
// });

// myServer.listen(3000,()=>{
//     console.log("Server is Running on Port 3000");
// });

const myServer = http.createServer((req,res)=>{
    res.end("Hello. <h1>I am Your first Server</h1>");
});

myServer.listen(port,hostname,()=>{
    console.log(`Server is Running at http://${hostname}:${port}/`);
});