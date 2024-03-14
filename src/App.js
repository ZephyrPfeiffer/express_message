import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect();

function App() {

  const [message, setMessage] = useState('');
  const [incomingMessage, setIncomingMessage] = useState('');

  const updateMessage = (e) => {
      setMessage(e.target.value)
  }

  const sendMessage = () => {
    socket.emit('chat message', {message: message});
  }

  socket.on('chat message', (data) => {
    setIncomingMessage(data.message);
  }); 

  return (
    <div>
      <input onChange={updateMessage} placeholder="message..." />
      <button onClick={sendMessage}>Send Message</button>
      <p>{incomingMessage}</p>
    </div>
  )
}

export default App;
