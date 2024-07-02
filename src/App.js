import React from 'react';
import './App.css';
import { useRef} from 'react';
import { useState, useEffect } from 'react';
import Prism from 'prismjs';


function App() {

  const ref = useRef(null);

  const handleChange = (e) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  

  return (
    <div className="App">
      <h1>react-simple-code-editor</h1>
      <h3>A simple no-frills code editor with syntax highlighting.</h3>
      <div class="container_editor">
      <textarea class="code_input" placeholder="Type some code..."  autoCapitalize='off' autoComplete='off' autoCorrect='off' spellCheck='false' data-gramm='false' ref={ref} onChange={handleChange}
            style={{
            margin:'0px',
            boxSizing:'inherit',
            // display:'inherit',
            fontFamily: 'inherit',
            fontStyle: 'inherit',
            fontVariantLigatures: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            lineHeight: 'inherit',
            tabSize: 'inherit',
            textIndent: 'inherit',
            textRendering: 'inherit',
            textTransform: 'inherit',
            backgroundColor: '#ECF0F1',
            whiteSpace:'pre-wrap',
            wordBreak:'keep-all',
            overflowWrap:'break-word',
            position:'inherit',
            // top:'0px',
            // left:'0px',
            height: '20px',
            width:'370px',
            resize:'vertical',
            color:'inherit',
            overflow:'auto',
            WebkitFontSmoothing:'antialiased',
            // WebkitTextFillColor:'transparent',          
            border: '0px',
            padding: '10px',
          }}></textarea>
          <pre aria-hidden="true" >
            <code>
          </code>
        </pre>
    </div>

    </div>
  );
}

export default App;
