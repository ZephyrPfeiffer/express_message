import "quill/dist/quill.snow.css";

export default function Message({ message }) {
  return (
    <li
      className="ql-editor message-container"
      style={{ display: "inline-block" }}
      dangerouslySetInnerHTML={{ __html: message }}
    ></li>
  );
}
