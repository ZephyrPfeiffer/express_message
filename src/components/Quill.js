import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import style from "./Quill.module.css";

export default function Quill({ setEditorContent }) {
  const theme = "snow";
  // const theme = 'bubble';

  const modules = {
    toolbar: [["bold", "italic", "underline", "strike"]],
  };

  const placeholder = "Compose an epic...";

  const formats = ["bold", "italic", "underline", "strike"];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setEditorContent(quill.getContents());
      });
    }
  }, [quill]);

  return <div className={style.quill} ref={quillRef} />;
}
