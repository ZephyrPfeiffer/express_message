import { useState, useRef } from "react";
import io from "socket.io-client";
import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";
import Quill from "./components/Quill";

const socket = io.connect();

function App() {
  const [currentContent, setCurrentContent] = useState();
  const [displayMessages, setDisplayMessages] = useState([]);

  const showContent = () => {
    console.log(currentContent);
  };

  const sendMessage = (quillContent) => {
    socket.emit("chat message", quillContent);
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
        <div className={style.editorContainer}>
          <Quill setCurrentContent={setCurrentContent} />
        </div>
        <button onClick={showContent} className={style.submitButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
