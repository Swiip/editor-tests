import Quill from "quill";

const Parchment = Quill.import("parchment");
const Block = Quill.import("blots/block");
const Container = Quill.import("blots/container");
const Inline = Quill.import("blots/inline");
const TextBlot = Quill.import("blots/text");
const Break = Quill.import("blots/break");
const Cursor = Quill.import("blots/cursor");

class Blockquote extends Block {}
Blockquote.blotName = "blockquote";
Blockquote.tagName = "blockquote";

Quill.register(Blockquote);
