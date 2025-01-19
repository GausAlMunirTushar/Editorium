import React, { useState } from "react";

const Editor = () => {
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    setContent(e.target.innerHTML);
  };

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => handleCommand("bold")}>Bold</button>
        <button onClick={() => handleCommand("italic")}>Italic</button>
        <button onClick={() => handleCommand("underline")}>Underline</button>
        <button onClick={() => handleCommand("strikeThrough")}>
          Strike-through
        </button>
        <button onClick={() => handleCommand("insertOrderedList")}>
          Ordered List
        </button>
        <button onClick={() => handleCommand("insertUnorderedList")}>
          Unordered List
        </button>
        <button
          onClick={() => handleCommand("createLink", prompt("Enter link URL"))}
        >
          Insert Link
        </button>
      </div>

      <div
        contentEditable="true"
        className="editor"
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="output">
        <h3>Editor Output (HTML)</h3>
        <pre>{content}</pre>
      </div>
    </div>
  );
};

export default Editor;
