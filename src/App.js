import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect();

function App() {

  const [message, setMessage] = useState('');

  const sendMessage = () => {
    socket.emit('incoming message', {message: 'hello'});
  }

  socket.on('outgoing message', (data) => {
    setMessage(data.message);
  }); 

  return (
    <div>
      <input placeholder="message..." />
      <button onClick={sendMessage}>Send Message</button>
      <p>{message}</p>
    </div>
  )
}

export default App;
