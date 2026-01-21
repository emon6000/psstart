const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// query parameters
// app.get('/', (req, res) => {
//     // const id = req.query.id;
//     // const name = req.query.name;
//     // const age = req.query.age;
//     const {id,name,age} = req.query;
// res.send(`<h1>reaponse id is  ${id},name is  ${name},age is  ${age}</h1>`);
// });

//route parameters
// app.get('/userid/:id/ugername/:name',(req,res)=>{
//    const id =req.params.id;
//     const name =req.params.name;

//     res.send(`<h1>reaponse id is  ${id},name is  ${name}</h1>`);

// });

//header
// app.get('/',(req,res)=>{
//    const id =req.header('id');
//     const name =req.header('name');

//     res.send(`<h1>reaponse id is  ${id},name is  ${name}</h1>`);

// });

//body-parser

// app.post("/user",(req,res)=>{
// const name = req.body.name;
// const age = req.body.age;
//  res.send(`<h1>reaponse name is  ${name},age is  ${age}</h1>`);
// });

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.send(`<h1>reaponse username is  ${username},password is  ${password}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
