import * as React from "react";
import * as ReactDOM from "react-dom";

import mail from "./mail";

const MyEditor = () => {
  const [content, setContent] = React.useState(mail);

  const handleChange = event => {
    console.log("change", event);
    console.log("selection", window.getSelection());
  };

  return (
    <div
      className="editor"
      contentEditable
      dangerouslySetInnerHTML={{ __html: content }}
      onKeyUp={handleChange}
    />
  );
};

ReactDOM.render(<MyEditor />, document.getElementById("native-editor"));
