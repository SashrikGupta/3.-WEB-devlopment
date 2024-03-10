import React from 'react'
import Card from '../Card/Card'
import Timeline from '../Timeline/Timeline'
import { useState , useEffect } from 'react';
import moment from 'https://cdn.skypack.dev/moment?min';
import RadarChart from '../CodeChart/CodeChart';






export default function UserCard() {




// user area ----------------------------------------------------------------


     //activity----------------------------------------------------

      // 1 year range
      let startDate = moment().add(-365, 'days');
      console.log(startDate)
      let dateRange = [startDate, moment()];
      //console.log(moment())
      let data = Array.from(new Array(366)).map((_, index) => {
         console.log(moment(startDate).add(index, 'day')) ;
         return {
         date: moment(startDate).add(index, 'day'),
         value: Math.floor(Math.random() * 100)
         };
      });

   // type of query --------------------------------------------------
   const q_type = [90,84,64,88,21,24] ;
   //-----------------------------------------------------------------
  
//------------------------------------------------------------------------------


  return (
    <div className = "flex flex-row">

      {/* ------------------------------------------------------------------- */}
      <div id = "outer1" 
      className='flex flex-col justify-center'
      style = {{
         width : '27vw' , 
         hiegth : '96vh'
      }} 
      >
         <Card w = '25vw' h = '60vh' mt = '[2vh]'ml = '3vw'>
            {/* this for user details  */}
         </Card>

         <Card w = '25vw' h = '27vh' mt='[2vh]' ml = '3vw'>
            {/* this is for query details */}
         </Card>
      </div>


      {/* ------------------------------------------------------------------- */}

            <div id = "outer2" style = {{width : '73vw'}}>

            <div className='flex justify-center ' >

               <Card w = '31vw' h = '38vh' mt = '[2vh]' mr = '1vw'>
                  {/* rank details  */}
               </Card>

               <Card w = '31vw' h = '38vh' mt = '[2vh]' ml = '1vw'>
               <RadarChart qt = {q_type}/>
               </Card>

            </div>

            {/* ------------------------------------------------ */}  

            <div className='flex justify-center items-center'>
               <Card w = '44vw' h = '20vh' mt = '[2vh]'p = '4'>
                  <div className = "flex ">
                     <Timeline range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(0 , 225 , 225 , ${alpha})`} />
                     </div>
                  </Card> 
                  <Card w = '18vw' h = '20vh' mt = '[2vh]'ml = '2vw'>
               </Card>
            </div>

            {/* ------------------------------------------------ */}  
            <div className='flex justify-center items-center'>
               <Card w = '64vw' h = '27vh' mt = '[2vh]'>
                  {/* recent querirs  */}
               </Card>
            </div>
            {/* ------------------------------------------------ */} 
            </div>
      {/* ------------------------------------------------------------------- */}

    </div>
  )
}
