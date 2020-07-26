import React, { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";

import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# hey there 👋 \ntype markdown here");

  function update(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="editable">
      <textarea onChange={update} value={markdown} />

      <div
        className="rendered"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(markdown)) }}
      />
    </div>
  );
}

export default App;
