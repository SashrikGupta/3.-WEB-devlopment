import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Hold from './Hold'

export default function Navbar(props)
 {


  return (

  <>




    <nav className ="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className ="container-fluid">

      {/* here  you can get the prop's properties from the app.js module in order to achive compnentization*/}
      <a className ="navbar-brand" href="/">{props.title_name}</a>


      <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
          <li className ="nav-item">
            <a className ="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="/">{props.about_text}</a>
          </li>
          <li className ="nav-item dropdown">
            <a className ="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.drop_name}
            </a>
            <ul className ="dropdown-menu">
              <li><a className ="dropdown-item" href="/">Action</a></li>
              <li><a className ="dropdown-item" href="/">Another action</a></li>
              <li><hr className ="dropdown-divider"/></li>
              <li><a className ="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className ="nav-item">
            <a className ="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className ="d-flex" role="search">
          <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className ="btn btn-outline-success" type="submit">Search</button>
        </form>

        <Hold pni = "" styles={{ display:'flex' , padding:'4px' }}>
              <Button bod = {props.bod} ></Button>
        </Hold>




      </div>
    </div>
  </nav>
  <h1> theme is {props.theme}</h1>

  </>
     
  )
}


Navbar.prototype =  
{
     title_name : PropTypes.string,
     link : PropTypes.string
}

Navbar.defaultProps = 
{
     about_text : "insert your about here" 
}