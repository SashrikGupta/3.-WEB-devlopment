import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg text-bg-dark p-3" >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' , fontSize:'30px' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.google.com/" style={{ color: 'white' , fontSize:'30px' }}>
              Git link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.google.com/" style={{ color: 'white' , fontSize:'30px' }}>
              about 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

