import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" data-bs-theme="dark" style={{ width: `${props.widi}` }}>
      <NavLink to="/" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        height: `${props.high}`,
        margin: '0px',
        padding: '0px',
      }}>
        <span style={{
          fontSize: '30px',
          textAlign: 'center',
          fontFamily: 'cursive',
          fontWeight: '1000'
        }}>FACE RECOG</span>
      </NavLink>
      <hr style={{ marginTop: '0px' }}></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">          
        <NavLink to="" className={({isActive})=>{return isActive ? "nav-link active":"nav-link text-white"}}>
            <svg className="bi pe-none me-2" width="24" height="24"><use xlinkHref="#home"></use></svg>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/UP" className={({isActive})=>{return isActive ? "nav-link active":"nav-link text-white"}}>
            <svg className="bi pe-none me-2" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
            Upload photo
          </NavLink>
        </li>
        <li>
        <NavLink to="/FD" className={({isActive})=>{return isActive ? "nav-link active":"nav-link text-white"}}>
            <svg className="bi pe-none me-2" width="24" height="24"><use xlinkHref="#table"></use></svg>
            Face-detect
          </NavLink>
        </li>
      </ul>
      <hr />

    </div>
  );
}
