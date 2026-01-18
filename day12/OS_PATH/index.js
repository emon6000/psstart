const os = require("os")
const path = require("path")

// console.log(__dirname);
// console.log(__filename);
// console.log(os);
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));

// const extensionName = path.extname("index.html");
// console.log(extensionName);

const joinName = path.join(__dirname, "index.html");
console.log(joinName);