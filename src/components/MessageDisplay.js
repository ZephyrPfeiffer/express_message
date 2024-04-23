import style from "./MessageDisplay.module.css";
import Message from "./Message";

export default function MessageDisplay({ displayMessages }) {
  return (
    <ul className={style.messageDisplay}>
      {displayMessages.map((message, index) => {
        return <Message key={index} text={message} />;
      })}
    </ul>
  );
}
