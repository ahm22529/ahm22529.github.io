const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 5173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    if (urlPath === "/") urlPath = "/index.html";
    const file = path.join(root, urlPath);
    if (!file.startsWith(root)) {
      res.writeHead(403);
      return res.end();
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("Not found");
      }
      res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, () => {
    console.log(`Portfolio running at http://localhost:${port}`);
  });
