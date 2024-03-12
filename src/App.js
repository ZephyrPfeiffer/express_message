import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect();

function App() {

  const sendMessage = () => {
    console.log(socket);
    socket.emit('incoming message', {message: 'hello'});
  }

  return (
    <div>
      <input placeholder="message..." />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App;
