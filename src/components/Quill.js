import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function Quill({ setEditorContent }) {
  const theme = "snow";
  // const theme = 'bubble';

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript

      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],

      ["clean"], // remove formatting button
    ],
  };

  const placeholder = "Compose an epic...";

  const formats = ["bold", "italic", "underline", "strike"];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log(quill.getSemanticHTML());
        setEditorContent(quill.getSemanticHTML());
      });
    }
  }, [quill]);

  return <div ref={quillRef} />;
}
