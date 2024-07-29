import "quill/dist/quill.snow.css";
import style from "./Message.module.css";

export default function Message({ message, messageID, userID }) {
  return (
    <li
      className={`ql-editor message-container ${style.message} ${
        messageID === userID ? style.rightMessage : style.leftMessage
      }`}
      style={{ display: "inline-block" }}
      dangerouslySetInnerHTML={{ __html: message }}
    ></li>
  );
}
