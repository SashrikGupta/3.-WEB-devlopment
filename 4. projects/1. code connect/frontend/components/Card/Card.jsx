import React from 'react';

export default function Card(props) {
  return (
    <>
      <div id="card" className={`flex justify-center items-center rounded-xl  backdrop-blur-3xl shadow-xl  p-${props.p} mx-${props.mx} my-${props.my} mt-${props.mt} mb-${props.mb} `}
        style={{
         backgroundColor: '#333333',
          width: props.w,
          height: props.h,
          marginRight: props.mr,
          marginLeft: props.ml,
          overflow: 'hidden', // Set overflow to 'hidden'
        }}
      >
        <div className="z-index-1">{props.children}</div>
      </div>
    </>
  );
}
