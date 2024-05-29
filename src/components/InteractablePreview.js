import { useState, useRef } from "react";
import style from "./InteractablePreview.module.css";

export default function InteractablePreview({
  message,
  currentStyling,
  sendMessage,
}) {
  const [selectedTextId, setSelectedTextId] = useState(null);
  const interactablePreviewText = [];
  const messageStyling = useRef([]);

  if (message) {
    const words = message
      .split(" ")
      .filter((word) => (word === "" ? false : true));

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        if (messageStyling.current[i]) {
          messageStyling.current[i].word = words[i];
        } else {
          messageStyling.current.push({ id: i, word: words[i], style: {} });
        }

        if (Number(selectedTextId) === i && currentStyling) {
          messageStyling.current[i].style = {
            ...messageStyling.current[i].style,
            ...currentStyling,
          };
        }

        interactablePreviewText.push(
          <span
            id={i}
            style={messageStyling.current[i].style}
            className={style.previewWord}
            key={i}
            onClick={handleClick}
          >
            {words[i]}
          </span>
        );
      }
    }
  }

  function handleClick(e) {
    setSelectedTextId(e.target.id);
  }

  if (message) {
    return (
      <div className={style.previewContainer}>
        {interactablePreviewText}
        <button
          className={style.sendButton}
          disabled={messageStyling.current.length <= 0 ? true : false}
          onClick={() => {
            sendMessage(messageStyling.current);
          }}
        >
          Send
        </button>
      </div>
    );
  }

  return null;
}
