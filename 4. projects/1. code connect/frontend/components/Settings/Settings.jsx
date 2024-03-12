import React from 'react'
import Card from '../Card/Card'
import Display from './Display'

export default function Settings() {
  return (
    <div className='flex justify-around'>
     <Card h = '90vh' w= '20vw' mt = '3'>
     <div className='w-[20vw] h-[90vh] flex flex-col items-center'>
      <h1 className='mt-3'>Settings </h1> 
      ________________________________________________________________

      <p class = "btn btn-primary mt-3" > Display </p>
     </div>
     </Card>
     <Card h = '90vh' w= '70vw' mt = '3'>
      <div className='h-[90vh] w-[70vw] p-4'>
      <Display></Display>
      </div>
     </Card>
    </div>
  )
}
