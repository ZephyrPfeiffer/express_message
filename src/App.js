import { useState } from "react";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import io from "socket.io-client";
import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";

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
          message={message}
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
