import React from 'react';
import Query from './Query';

const Querylist = () => {
  const bg = '#333333';
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
      style_button: 'w-[10vw] flex items-center justify-center text-white rounded-lg bg-yellow-600 font-medium hover:text-indigo-500',
      link: '#',
      solver: '',
    },
  };

  const temp = [1, 2, 3, 1,2 , 1 , 2, 1, 3 , 3 , 2 , 1];
  return (
    <div style={{ overflow: 'hidden' }}>
      <ul
        className='mt-10'
        style={{
          overflowY: 'auto',
          maxHeight: '80vh',
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
  );
};

export default Querylist;
