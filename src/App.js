import { useState } from "react";
import io from "socket.io-client";
import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";
import Quill from "./components/Quill";

const socket = io.connect();

function App() {
  const [editorContent, setEditorContent] = useState();
  const [chatMessages, setChatMessages] = useState([]);

  // const showContent = () => {
  //   console.log(editorContent);
  // };

  const sendMessage = () => {
    socket.emit("sent message", {
      message: editorContent,
      id: socket.id,
    });
  };

  socket.on("chat message", (messageInformation) => {
    setChatMessages([
      ...chatMessages,
      { message: messageInformation.message, messageId: messageInformation.id },
    ]);
  });

  return (
    <div className={style.appContainer}>
      <div className={style.messageInterface}>
        <MessageDisplay
          className={style.messageDisplay}
          chatMessages={chatMessages}
          userID={socket.id}
        />
        <div className={style.editorContainer}>
          <Quill setEditorContent={setEditorContent} />
        </div>
        <button onClick={sendMessage} className={style.submitButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
