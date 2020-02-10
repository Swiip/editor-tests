import * as React from "react";
import { render } from "react-dom";

import { SmartBlock, Extensions } from "smartblock";

import mail from "./mail";

import "smartblock/css/smartblock.css";

render(
  <>
    <SmartBlock
      extensions={Extensions}
      html={mail}
      onChange={({ json, html }) => {
        console.log(json, html);
      }}
    />
  </>,
  document.getElementById("smart-editor")
);
