const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 8080;

app.use(express.static('build'));

io.on('incoming message', (data) => {
  console.log(data);
})

app.listen(PORT, () => console.log('Sever started'));