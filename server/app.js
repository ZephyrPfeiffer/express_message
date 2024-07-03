const express = require("express");
const cors = require("cors");

const app = express();
const { createServer } = require("node:http");
const { Server } = require("socket.io");

app.use(cors());
app.use(express.static("build"));

const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;

io.on("connection", (socket) => {
  socket.on("chat message", (messageContent) => {
    io.emit("chat message", messageContent);
  });
});

server.listen(PORT, () => console.log("Sever started"));
