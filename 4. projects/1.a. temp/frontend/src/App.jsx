import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const editorRef = useRef(null);

  useEffect(() => {
    async function init() {
      if (!editorRef.current) return;
      Codemirror.fromTextArea(editorRef.current, {
        mode: 'text/x-c++src',
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);

  return (
    <>
    <div
    style = {{
      height : '50vh',
      width : '80vw',
      overflow : 'hidden'
    }}
    >
    <textarea 
     ref={editorRef} 
     id="RTE" 
     style = {{
      height : '50vh',
      width : '80vw',
     }}></textarea>
    </div>

    </>
  );
}

export default App;
