const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, function (error) {
  if (error) {
    console.log("Something error: ", error);
  } else {
    console.log("Server running on port: ", port);
  }
});
