import style from "./MessageDisplay.module.css";
import Message from "./Message";

export default function MessageDisplay({ chatMessages, userID }) {
  return (
    <ul className={style.messageDisplay}>
      {chatMessages.map((messageInfo, index) => {
        return (
          <Message
            key={index}
            message={messageInfo.message}
            messageID={messageInfo.messageID}
            userID={userID}
          />
        );
      })}
    </ul>
  );
}
