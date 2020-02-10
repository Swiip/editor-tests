import * as React from "react";
import * as ReactDOM from "react-dom";
import { Editor, EditorState, ContentState, convertFromHTML } from "draft-js";

import mail from "./mail";

console.log("mail", mail);

const blocksFromHTML = convertFromHTML(mail);
const state = ContentState.createFromzBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap
);

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(state)
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
}

ReactDOM.render(<MyEditor />, document.getElementById("draft-editor"));
