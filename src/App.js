import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect();

function App() {

  const [incomingMessage, setIncomingMessage] = useState('');

  const sendMessage = () => {
    socket.emit('chat message', {message: 'hello'});
  }

  socket.on('chat message', (data) => {
    setIncomingMessage(data.message);
  }); 

  return (
    <div>
      <input placeholder="message..." />
      <button onClick={sendMessage}>Send Message</button>
      <p>{incomingMessage}</p>
    </div>
  )
}

export default App;
