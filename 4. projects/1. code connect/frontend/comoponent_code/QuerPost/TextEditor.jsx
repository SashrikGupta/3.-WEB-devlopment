import React from 'react'
import {useState , useEffect, useRef } from 'react';
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
  const [ed, setEd] = useState(null);

  useEffect(() => {
    async function init() {
      if (!editorRef.current) return;
      const newEd = Codemirror.fromTextArea(editorRef.current, {
        mode: props.mode,
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
      setEd(newEd);
      props.set(newEd);
    }
    init();
  }, [props.mode]);

  return (
    <div
      id="o"
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
        id={props.id}
        style={{
          minHeight: props.h,
          width: props.w,
        }}
      />
    </div>
  );
}
