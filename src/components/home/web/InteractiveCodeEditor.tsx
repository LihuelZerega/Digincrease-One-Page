import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const InteractiveAppEditor = () => {
  const [code, setCode] = useState(`import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to My App!</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </header>
    </div>
  );
}

export default App;`);

  return (
    <div className="relative min-h-[30rem] w-full grow">
      <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
          <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
              App.tsx
            </div>
          </div>
        </div>
        <div className="px-3 pb-14 pt-3">
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)}
            highlight={(code) => highlight(code, languages.js, 'javascript')}
            padding={10}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-inner"
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveAppEditor;
