const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require('./routes/users.route');

// --- NETLIFY SETUP START ---
// Create a router to handle routes
const router = express.Router();

// Move your routes from 'app.get' to 'router.get'
router.get('/', (req, res) => {
    // Note: sendFile can sometimes be tricky in Netlify functions. 
    // If this fails on deploy, try sending simple text: res.send("App is running");
    res.sendFile(__dirname + '/views/index.html');
});

router.use("/users", userRoutes);

// Mount the router on the Netlify path AND the root path (for local use)
app.use('/.netlify/functions/api', router);
app.use('/', router);
// --- NETLIFY SETUP END ---


// route not found
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// server error handler
app.use((err, req, res, next) => {
    res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;