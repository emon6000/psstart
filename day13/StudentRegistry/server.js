const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the CSE Dept API");
  } else if (req.url === "/api/students") {
    try {
      const data = await fs.readFile("database.json", "utf-8");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    } catch (error) {
      res.writeHead(500);
      res.end("Database error");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
