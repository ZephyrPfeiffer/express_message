import { useState, useRef } from "react";
import io from "socket.io-client";
import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";
import Quill from "./components/Quill";

const socket = io.connect();

function App() {
  const [editorContent, setEditorContent] = useState();
  const [chatMessages, setChatMessages] = useState([]);

  const showContent = () => {
    console.log(editorContent);
  };

  const sendMessage = (quillContent) => {
    socket.emit("chat message", quillContent);
  };

  socket.on("chat message", (data) => {
    setChatMessages([...chatMessages, data.message]);
  });

  return (
    <div className={style.appContainer}>
      <div className={style.messageInterface}>
        <MessageDisplay
          className={style.messageDisplay}
          chatMessages={chatMessages}
        />
        <div className={style.editorContainer}>
          <Quill setEditorContent={setEditorContent} />
        </div>
        <button onClick={showContent} className={style.submitButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
