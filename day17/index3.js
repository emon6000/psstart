const express = require('express');
const app = express();
const port = 3000;

const myMiddleWare =(req,res,next)=>{
    console.log("Midlle ware function");
    req.currentTime = new Date(Date.now());
    next();
}
app.use(myMiddleWare);

app.use((req,res,next)=>{
    res.send("404 bad url request");
});

// app.get("/", myMiddleWare, (req, res) => {
//   res.send("Hello World!"+req.currentTime);
//   console.log("home"+req.currentTime);
// });
app.get("/",  (req, res) => {
  res.send("Hello World!"+req.currentTime);
  console.log("home"+req.currentTime);
});
app.get("/about", (req, res) => {
  res.send("Hello World!"+req.currentTime);
  console.log("about"+req.currentTime);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});