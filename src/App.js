import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect();

function App() {
  const [message, setMessage] = useState("");
  const [displayMessages, setDisplayMessages] = useState([]);

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    socket.emit("chat message", { message: message });
  };

  socket.on("chat message", (data) => {
    setDisplayMessages([...displayMessages, data.message]);
  });

  return (
    <div className={style.appContainer}>
      <div className={style.messageInterface}>
        <MessageDisplay
          className={style.messageDisplay}
          displayMessages={displayMessages}
        />
        <textarea
          className={style.messageInput}
          onChange={updateMessage}
          placeholder="message..."
        ></textarea>
        <button onClick={sendMessage} className={style.submitButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
