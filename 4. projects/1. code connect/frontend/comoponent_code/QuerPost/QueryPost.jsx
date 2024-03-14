import React from 'react'
import Card from '../../components_basic/Card/Card'
import TextEditor from './TextEditor'

export default function QueryPost() {
  return (
    <>
    <div className='flex '>
      <Card w = '35vw' h = '90vh' mx = '3'  my = '2'>

      </Card>
      <div className='flex flex-col'>
         <Card w = '65vw' h = '68vh' mx = '3'  mt = '2'>
          <TextEditor 
            w='60vw' 
            h='65vh'
            tailwind = 'rounded-lg opacity-100'
         />
         </Card>
         <Card w = '65vw' h = '20vh' mx = '3' mt='[2vh]' >

          </Card>
      </div> 
    </div>

    </>
  )
}
