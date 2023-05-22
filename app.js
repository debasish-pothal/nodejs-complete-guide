const http = require("http");
const fs = require("fs");

function reqListener(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<p>hi there!</p>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    console.log(req);
    fs.writeFileSync("message.txt", "Test success");
    res.statusCode = 302;
    return res.end();
  }
}

const server = http.createServer(reqListener);

server.listen(3000);
