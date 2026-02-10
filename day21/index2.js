const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to DB
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

//creating schema and model
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[  true,"Name is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    }
}); 

const User = mongoose.model("User",userSchema);

//file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null,name);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/index2.html");
});

app.post("/register", upload.single("image"), async (req, res) => {
try{
    const user = new User({
        name:req.body.name,
        image:req.file.filename
    });
    await user.save();
    res.status(200).send(user);
}catch(error){
    console.error("Error saving user to database:", error);
    res.status(500).send("Internal Server Error");
}
  res.status(200).send("Form submitted successfully!");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await connectDB();
});
