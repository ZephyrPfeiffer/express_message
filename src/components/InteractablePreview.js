import style from "./InteractablePreview.module.css";

export default function MessageOverlay({ message }) {
  const words = message.split(" ");
  const interactablePreviewText = [];

  function handleClick() {
    console.log("hello");
  }

  for (let i = 0; i < words.length; i++) {
    interactablePreviewText.push(
      <span className={style.word} key={i} onClick={handleClick}>
        {words[i]}
      </span>
    );
  }

  if (message) {
    return (
      <div className={style.previewContainer}>{interactablePreviewText}</div>
    );
  }

  return null;
}
