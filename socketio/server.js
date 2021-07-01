const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
global.io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/server.html");
});

//connection io
io.on("connection", (socket) => {
  // tell user someone connected
  io.emit("from server", `${socket.id} connected`);
  //on message from front end
  socket.on("chat", (msg) => {
    //sending msg to all connected user
    console.log(socket);
    io.emit("from server", `${socket.id}: ` + msg);
  });

  socket.on("isTyping", (val) => {
    if (val) {
      io.emit("isTyping", val, socket.id);
    } else {
      io.emit("isTyping", val, socket.id);
    }
  });
  // on disconnect
  socket.on("disconnect", () => {
    io.emit("from server", `${socket.id} disconnected`);
  });
});

//server start
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
