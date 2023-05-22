const http = require("http");

function reqListener(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<p>hi there!</p>");
  res.write("</html>");
  res.end();
}

const server = http.createServer(reqListener);

server.listen(3000);
