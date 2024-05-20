import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import io from "socket.io-client";
import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";
import MessageOverlay from "./components/MessageOverlay";

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
        <div className={style.messageInputContainer}>
          <MessageOverlay />
          <textarea
            className={style.messageInput}
            onChange={updateMessage}
            placeholder="message..."
          ></textarea>
        </div>
        <button onClick={sendMessage} className={style.submitButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
