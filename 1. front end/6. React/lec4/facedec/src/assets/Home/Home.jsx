import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div style={{
      width: 'calc(100vw - 280px)', 
      height: 'calc(100vh - 94px)',
      backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/60479868292a5d29e69ac6b9/d2f479f8-2005-43ae-bb36-e90333fa8f19/Future_of_Artificial_Intelligence.gif")',
      backgroundPosition:'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'column',
      backgroundSize:'cover',

    }}></div>
  );
}
