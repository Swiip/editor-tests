import Quill from "quill";

import mail from "./mail";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["blockquote-container"]
];

const editor = new Quill("#quill-editor", {
  debug: "debug",
  theme: "snow",
  modules: {
    toolbar: toolbarOptions
  }
});

console.log("Quill", editor);

editor.setContents(editor.clipboard.convert(mail));
