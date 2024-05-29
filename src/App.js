import { useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";
import io from "socket.io-client";
import style from "./App.module.css";
import MessageDisplay from "./components/MessageDisplay";
import InteractablePreview from "./components/InteractablePreview";

const socket = io.connect();

function App() {
  const [message, setMessage] = useState("");
  const [displayMessages, setDisplayMessages] = useState([]);
  const [currentStyling, setCurrentStyling] = useState(null);
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (message) => {
    socket.emit("chat message", { data: message });
  };

  socket.on("chat message", (data) => {
    setDisplayMessages([...displayMessages, data.messageStyling]);
  });

  const updateCurrentStyling = (stylingObject) => {
    setCurrentStyling({ ...currentStyling, ...stylingObject });
  };

  return (
    <div className={style.appContainer}>
      <div className={style.messageInterface}>
        <MessageDisplay
          className={style.messageDisplay}
          displayMessages={displayMessages}
        />
        <Wheel
          className={style.colorWheel}
          color={hsva}
          onChange={(color) => {
            setHsva({ ...hsva, ...color.hsva });
            updateCurrentStyling({ color: hsvaToHex(hsva) });
          }}
        />
        <InteractablePreview
          message={message}
          currentStyling={currentStyling}
          sendMessage={sendMessage}
        />
        <textarea
          className={style.messageInput}
          onChange={updateMessage}
          placeholder="message..."
        ></textarea>
      </div>
    </div>
  );
}

export default App;
