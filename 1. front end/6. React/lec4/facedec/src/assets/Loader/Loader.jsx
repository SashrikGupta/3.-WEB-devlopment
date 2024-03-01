import React from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div id = "hi" 
      style = {{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span className={styles.loader}></span>
    </div>
  );
}