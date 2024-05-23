import { useState } from "react";
import style from "./InteractablePreview.module.css";

export default function InteractablePreview({ message }) {
  const interactablePreviewText = [];
  const messageStyling = [];

  if (message) {
    const words = message.split(" ");

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        interactablePreviewText.push(
          <span
            id={i}
            className={style.previewWord}
            key={i}
            onClick={handleClick}
          >
            {words[i]}
          </span>
        );
        messageStyling.push({ id: i, text: words[i], styling: {} });
      }
    }
  }

  function handleClick() {
    console.log(interactablePreviewText, messageStyling);
  }

  if (message) {
    return (
      <div className={style.previewContainer}>{interactablePreviewText}</div>
    );
  }

  return null;
}
