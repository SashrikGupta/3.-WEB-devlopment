import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div
        id="mySidebar"
        style={{
          height: '100%',
          width: isSidebarOpen ? '250px' : '0',
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: '#111',
          overflowX: 'hidden',
          transition: '0.5s',
          paddingTop: '60px',
        }}
      >
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={closeNav}
          style={{
            position: 'absolute',
            top: 0,
            right: '25px',
            fontSize: '36px',
            marginLeft: '50px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          &times;
        </a>
        <a
          href="#"
          style={{
            padding: '8px 8px 8px 32px',
            textDecoration: 'none',
            fontSize: '25px',
            color: '#818181',
            display: 'block',
            transition: '0.3s',
          }}
        >
          About
        </a>
        {/* Add similar styles for other links */}
      </div>

      <div
        id="main"
        style={{
          transition: 'margin-left .5s',
          marginLeft: isSidebarOpen ? '250px' : '0',
        }}
      >
        <button
          className="openbtn m-1"
          onClick={openNav}
          style={{
            fontSize: '15px',
            cursor: 'pointer',
            backgroundColor: '#111',
            color: 'white',
            padding: '0.5vh 1vw',
            border: 'none',
            borderRadius :'15%' , 
            margin : 'auto' , 
         
          }}
        >
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
