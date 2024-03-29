import style from './App.module.css'
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
    <div className={style.appContainer}>
      <div className={style.messageInterface}>
        <ul className={style.messageDisplay}></ul>
        <input onChange={updateMessage} placeholder="message..." />
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default App;
