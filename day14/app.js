const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");
const adminRouter = require("./routes/admin.route");

app.use("/api/users", userRouter);
// app.use("/admin",adminRouter);

app.use("/register", (req, res) => {
  // res.send("I am a GET request at register route");
  // res.status(200).json({
  //     "message":"I am a GET request at register route",
  //     "status":200
  // });
  // res.redirect("/login");
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});
app.use("/login", (req, res) => {
//   res.send("I am a GET request at login route");
  //   res.cookie("name", "fgf");
  //   res.cookie("age", "23");
//   res.clearCookie("name");
//   res.clearCookie("age");
res.append("id","12000");
  res.end();
});
app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
// app.post("/",(req,res)=>{
//     res.send("I am a POST request at home route");
// });
// app.put("/",(req,res)=>{
//     res.send("I am a PUT request at home route");
// });
// app.delete("/",(req,res)=>{
//     res.send("I am a DELETE request at home route");
// });

// app.get("/register",(req,res)=>{
//     // res.set("Content-Type", "text/html");
//     res.send("<h1>I am a GET request at register route</h1>");
// });
// app.get("/login",(req,res)=>{
//     res.send("I am a GET request at login route");
// });

module.exports = app;
