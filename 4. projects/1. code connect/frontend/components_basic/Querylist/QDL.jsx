import React  from 'react'
import {useParams} from 'react-router-dom' 

export default function QDL() {
   const {id} = useParams() ; 
   
  return (
    <div>querydetail id = "{id} "</div>
  )
}
