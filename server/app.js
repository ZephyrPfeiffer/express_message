const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/dbConnect");

const app = express();
const { createServer } = require("node:http");
const { Server } = require("socket.io");

app.use(cors());
app.use(express.static("build"));

const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;

dbConnect();

io.on("connection", (socket) => {
  socket.on("sent message", (messageInformation) => {
    io.emit("chat message", messageInformation);
  });
});

server.listen(PORT, () => console.log("Sever started"));
