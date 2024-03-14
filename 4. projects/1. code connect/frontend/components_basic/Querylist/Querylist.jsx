import React, { useContext } from 'react';
import Query from './Query';
import { useState } from 'react'
import { curr_context } from '../../contexts/background'
import Card from '../Card/Card';

const Querylist = () => {
  const now_context = useContext(curr_context) ; 
  const bg = now_context.theme ;
  const description = 'dsa';
  const title = 'c++ problem';
  const points = 50;
  const sender = 'sash';
  const solver = 'aagam';
  const tag = 'compititive';

  const option = {
    unsolved: {
      status: 'unsolved',
      style_status: 'text-green-600',
      button: 'solve',
      style_button: 'w-[10vw] flex items-center justify-center text-black rounded-lg bg-green-600 font-medium hover:text-indigo-500',
      link: '#',
      solver: 'hidden',
    },
    solved: {
      status: 'solved',
      style_status: 'text-red-600',
      button: 'details',
      style_button: 'w-[10vw] flex items-center justify-center text-white rounded-lg bg-red-600 font-medium hover:text-indigo-500',
      link: '#',
      solver: '',
    },
    inprocess: {
      status: 'inprocess',
      style_status: 'text-yellow-600',
      button: 'details',
      style_button: 'w-[10vw] flex items-center justify-center text-white rounded-lg bg-yellow-600  font-medium hover:text-indigo-500',
      link: '#',
      solver: '',
    },
  };

  const temp = [1, 2, 3, 1,2 , 1 , 2, 1, 3 , 3 , 2 , 1];
  return (
    <> 
    <div className = "w-[100vw] flex flex-col  justigy-center">
      <div className='m-[auto] mt-4 flex flex-col items-center justify-center w-[80vw] h-[10vh]'>
        <Card w = "80vw" h = "10vh">
          <div className='flex w-[80vw] justify-around'>
          <hr></hr>
          <span>sort by options : </span>  
          <div className= 'overflow-x-auto '>
          <button id="sort" className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1" style = {{fontSize: "2.5vh" }}> Date </button>
          <button id="unsolved" className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1 " style = {{fontSize: "2.5vh" }}> Points </button>
          <button id="solved" className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1" style = {{fontSize: "2.5vh" }}> unsolved </button>
          <button id="solved" className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1" style = {{fontSize: "2.5vh" }}> solved </button>
          <button id="process"className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1" style = {{fontSize: "2.5vh" }}> process </button>
          <button id="process"className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1" style = {{fontSize: "2.5vh" }}> your asked </button>
          <button id="process"className = "btn bg-[aqua] opacity-[1] mx-1 p-0 px-1" style = {{fontSize: "2.5vh" }}> your solve </button>
          </div>
          <hr className='mt-1'></hr>           
          </div>
        </Card>
      </div>
    <div style={{ overflow: 'hidden' }}>
      <ul
        className='mt-10'
        style={{
          overflowY: 'auto',
          maxHeight: '70vh',
          scrollbarWidth: 'none', 
          WebkitScrollbar: {
            display: 'none', 
          },
        }}
      >
        {temp.map((el) => {
          let tem = '';
          if (el === 1) tem = option.unsolved;
          if (el === 2) tem = option.solved;
          if (el === 3) tem = option.inprocess;
          return (
            <Query
              key={el}
              bg={bg}
              title={title}
              description={description}
              points={points}
              sender={sender}
              solver={solver}
              tag={tag}
              type={tem}
            />
          );
        })}
      </ul>
    </div>
    </div>
    </>

  );
};

export default Querylist;
