import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect();

function App() {

  const [message, setMessage] = useState('');

  const sendMessage = () => {
    socket.emit('chat message', {message: 'hello'});
  }

  socket.on('chat message', (data) => {
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
