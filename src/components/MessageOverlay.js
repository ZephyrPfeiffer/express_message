import style from "./MessageOverlay.module.css";

export default function MessageOverlay({ message }) {
  const words = message.split(" ");
  const interactableOverlayText = [];

  function handleClick() {
    console.log("hello");
  }

  for (let i = 0; i < words.length; i++) {
    interactableOverlayText.push(
      <span className={style.word} key={i} onClick={handleClick}>
        {words[i]}
      </span>
    );
  }

  return <div className={style.overlay}>{interactableOverlayText}</div>;
}
