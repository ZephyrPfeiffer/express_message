import style from "./MessageDisplay.module.css";
import Message from "./Message";

export default function MessageDisplay({ chatMessages }) {
  return (
    <ul className={style.messageDisplay}>
      {chatMessages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </ul>
  );
}
