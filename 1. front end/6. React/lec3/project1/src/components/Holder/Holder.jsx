import React from 'react'

export default function Holder(props) {
  return (
    <div style = {props.styles}>
      {props.children}
    </div>
  )
}
