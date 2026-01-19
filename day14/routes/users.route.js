const express = require('express');
const router = express.Router();

router.get("/register",(req,res)=>{
    // res.set("Content-Type", "text/html");
    res.send("<h1>I am a GET request at register route</h1>");
});
router.get("/login",(req,res)=>{
    res.send("I am a GET request at login route");
});

module.exports = router;