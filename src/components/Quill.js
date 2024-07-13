import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default function Quill({ setEditorContent }) {
  const theme = "snow";
  // const theme = 'bubble';

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      // ["link", "image", "video", "formula"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript

      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],

      ["clean"], // remove formatting button
    ],
    syntax: { hljs },
  };

  const formats = ["code-block", "blockquote", "script", "list"];

  const placeholder = "Compose an epic...";

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
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
