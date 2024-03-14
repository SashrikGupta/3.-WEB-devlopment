import React from 'react'
import {useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import './TextEditor.module.css'


export default function TextEditor(props) {
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
 
      <div id ="o"
        className={props.tailwind}
        style={{
          height: props.h,
          width: props.w,
          overflow: 'hidden',
        }}
      >
        <textarea
          className={props.tailwind}
          ref={editorRef}
          id="RTE"
          style={{
            minHeight : props.h , 
            width: props.w,
          }}
        ></textarea>
      </div>
      </>

    );
    
}
