import React from 'react'

export default function Welcome() {
  return (
    <div style = {{
      display : 'flex' , 
      flexDirection: 'column', 
      margin: 'auto',
      alignItems : 'center' ,
      justifyContent:'center',
      gap:'10px',
      height : '100%'

    }}>
      <h1> currently no entries</h1>
      <div className="btn btn-primary">
         fetch posts from the api 
      </div>
    </div>
  )
}
