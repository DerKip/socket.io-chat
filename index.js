var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

require("dotenv").config();
var port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connect", socket => {
  console.log("A user connected");
  socket.on("chat", msg => {
    console.log("message: " + msg);
  });
});

http.listen(port, () => {
  console.log("running on:", `http://localhost:${port}`);
});
