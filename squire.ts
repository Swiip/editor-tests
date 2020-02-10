import Squire from "squire-rte";

import mail from "./mail";

const squireElement = document.getElementById("squire-editor");

const squire = new Squire(squireElement);

console.log("Squire", Squire, squireElement, squire);

squire.insertHTML(mail);
