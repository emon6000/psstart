const http = require("http");
const fs = require("fs");
// const PORT = 3000;
const PORT = process.env.PORT || 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode,fileLocation,contentType) => {
    fs.readFile(fileLocation, (err, data) => {
        if (err) {
        res.writeHead(404);
        res.end("Error: File Not Found");
      } else {
        res.writeHead(statusCode, { "Content-Type": contentType });
        res.write(data);
        res.end();
      }
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "./index.html", "text/html");
  } else if (req.url === "/index.html") {
    handleReadFile(200, "./index.html", "text/html");
  } else if (req.url === "/about.html") {
    handleReadFile(200, "./about.html", "text/html");
  } else if (req.url === "/contact.html") {
    handleReadFile(200, "./contact.html", "text/html");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404: Page Not Found</h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
