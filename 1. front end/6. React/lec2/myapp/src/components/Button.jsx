import React from 'react'

export default function (props) {
  return (
   <div className = "hok" >
   <input type="checkbox" className="checkbox" id="checkbox" onChange={props.bod}/>
   <label htmlFor="checkbox" className="checkbox-label">
     <i className="fas fa-moon"></i>
     <i className="fas fa-sun"></i>
     <span className="ball"></span>
   </label>
 </div>
  )
}
