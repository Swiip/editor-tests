import Trix from "trix";

import mail from "./mail";

console.log("Trix", Trix);

const trix = document.querySelector("trix-editor");

console.log("trix", trix, trix.editor);

const trixEditor = trix.editor;

trixEditor.insertHTML(mail);
