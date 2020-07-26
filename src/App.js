import React, { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import { ThemeProvider, SimpleGrid, Box } from "@chakra-ui/core";

import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# hey there 👋 \ntype markdown here");

  function update(e) {
    setMarkdown(e.target.value);
  }

  return (
    <ThemeProvider>
      {
        <SimpleGrid minChildWidth="120px" colummns={2}>
          <Box>
            <div className="editable">
              <textarea onChange={update} value={markdown} />
            </div>
          </Box>
          <Box bg="gray.100">
            <div
              className="rendered"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(markdown)) }}
            />
          </Box>
        </SimpleGrid>
      }
    </ThemeProvider>
  );
}

export default App;
