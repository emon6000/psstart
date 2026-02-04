// functions/api.js
const serverless = require('serverless-http');
const app = require('../app'); // This imports your app.js file

module.exports.handler = serverless(app);