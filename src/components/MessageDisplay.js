import style from "./MessageDisplay.module.css";
import Message from "./Message";
import InteractablePreview from "./InteractablePreview";

export default function MessageDisplay({ displayMessages, message }) {
  return (
    <div className={style.messageDisplayContainer}>
      <ul className={style.messageDisplay}>
        {displayMessages.map((message, index) => {
          return <Message key={index} text={message} />;
        })}
      </ul>
      <InteractablePreview message={message} />
    </div>
  );
}
