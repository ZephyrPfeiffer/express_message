import { useState } from "react";
import style from "./InteractablePreview.module.css";

export default function InteractablePreview({ message, currentStyling }) {
  const [selectedTextId, setSelectedTextId] = useState(null);
  const interactablePreviewText = [];
  const messageStyling = [];

  if (message) {
    const words = message.split(" ");

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        messageStyling.push({ id: i, word: words[i], style: {} });

        if (selectedTextId == i && currentStyling) {
          messageStyling[i].style = {
            ...messageStyling[i].style,
            ...currentStyling,
          };
          console.log(messageStyling);
        }

        interactablePreviewText.push(
          <span
            id={i}
            style={messageStyling[i].style}
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

  // if (currentStyling && selectedTextId) {
  //   messageStyling[selectedTextId].style = {
  //     ...messageStyling[selectedTextId].style,
  //     ...currentStyling,
  //   };
  //   console.log(messageStyling);
  // }

  function handleClick(e) {
    setSelectedTextId(e.target.id);
  }

  if (message) {
    return (
      <div className={style.previewContainer}>{interactablePreviewText}</div>
    );
  }

  return null;
}
