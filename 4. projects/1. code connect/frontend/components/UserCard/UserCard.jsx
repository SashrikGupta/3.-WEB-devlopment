import React from 'react'
import Card from '../Card/Card'
import Timeline from '../Timeline/Timeline'
import { useState , useEffect } from 'react';
import moment from 'https://cdn.skypack.dev/moment?min';
import RadarChart from '../CodeChart/CodeChart';
import styles from "./UserCard.module.css"
import QBC from '../CodeChart/QBC';




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
   const q_type = [90,84,64,88,91,24] ;
   //-----------------------------------------------------------------
  
   const description = ""
   const name = "Sashrik"
   const nickname = "sash🫠"
   const year = "2nd year"
   const tag = "react_dev "
   const raiting = 4.3 ; 
   const link = null || "https://source.unsplash.com/random/?blue"
   const n_query = [
      { category: 'Total query', value: 5 },
      { category: 'query solved', value: 3 },
      { category: 'query asked' , value: 2 }
    ];
    const rank = 18 
    const followed = 15 
    const following = 20
    const post = 30 
    const str = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...
    `
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
            
            <div className = "flex flex-col items-center justify-center"
             style = {{
               whidth : '25vw' , 
               height : '60vh'
             }}
            >
            <div className='flex flex-col items-center mb-2 justiy-center bg-[rgb(0,0,0,0.3)] rounded-lg'
            style = {{width : '20vw' , height :'35vh'}}
            >
               
            <div className = "bg-white rounded-lg my-2"
               style={{
                  width : '15vw',
                  height : '40vh' , 
                  backgroundImage : `url(${link})`
               }}
            >
             </div>   
             <div style ={{
               fontSize : '4vh' ,
               color : 'aqua' , 
               marginBottom : '1.vh'
             }}>
             {nickname}
               </div>           
            </div>   



             <div className = "bg"
               style={{
                  width : '20vw',
                  height : '20vh' , 
                  fontSize : '1vw',
                  color : 'rgb(0,225,225)' , 
               }}
            >
               <div className='px-2 bg-[#222222] rounded-lg text-center mb-2'
               style = {{
                   fontSize : '4vh' ,   
                   color : 'white' 
                  }}
               >
               points : <span style={{color : 'yellow'}}>500</span> 🪙
               </div>


               <div className='px-2 bg-[#222222] rounded-lg text-center mb-2 flex items-center'
               style = {{
                   fontSize : '1.5vh' ,   
                   color : 'white'  , 
                   fontFamily : 'sans-serif' ,
                   height : ' 14vh'
                  }}
               >
               {str}
               </div>

               
               
               
             </div>

            </div>

         </Card>

         <Card w = '25vw' h = '27vh' mt='[2vh]' ml = '3vw'>

         <div className = {`${styles.codeEditor} opacity-60`}
                 style = {{
                  fontSize : '2.2vh'
                 }}
               >
               <div className={styles.lineNumbering}>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
               </div>
               <div className={styles.codeBlock}>
                  <span className={styles.keyword}>class</span> <span className={styles.className}>{tag}</span> {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;<span className={styles.variable}>String <span className={styles.variableName}>name = </span></span><span className={styles.value}>{`"${name}"`}</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;<span className={styles.variable}>String </span><span className={styles.variableName}>year = </span> <span className={styles.value}>{`"${year}"`}</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;<span className={styles.dataType}>float <span className={styles.variableName}>Raiting = </span></span> <span className={styles.value}>{raiting}</span>;
                  <br />
                  {'}'}
               </div>
               </div>
         </Card>
      </div>


      {/* ------------------------------------------------------------------- */}

            <div id = "outer2" style = {{width : '73vw'}}>

            <div className='flex justify-center ' >

               <Card w = '31vw' h = '38vh' mt = '[2vh]' mr = '1vw'>
                  <h1 className='ml-[4vw]'
                  style = {{fontSize : '5vh',}}
                  > RANK  : {rank}</h1>
                  <hr className='w-[30vw] my-3'/>
                  <div className='flex flex-col ml-[4vw]'
                  style = {{
                     //width : '20vw',
                     gap : '0.01vw'
                  }}
                  >
                  <p> following : {following}<br></br>
                   followed by : {followed}<br></br>
                   avergae raiting : {raiting}<br></br>
                   posts : {post}</p>
                  </div>


               </Card>

               <Card w = '31vw' h = '38vh' mt = '[2vh]' ml = '1vw'>
               <RadarChart qt = {q_type}/>
               </Card>

            </div>

            {/* ------------------------------------------------ */}  

            <div className='flex justify-center items-center'>
               <Card w = '44vw' h = '20vh' mt = '[2vh]' p = '4'>
                  <div className = "flex ">
                     <Timeline range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(0 , 225 , 225 , ${alpha})`} />
                     </div>
                  </Card> 
                  <Card w = '18vw' h = '20vh' mt = '[2vh]'ml = '2vw'>
                     <div className="flex justify-center items-center ">
                     <div className = "flex flex-col justify-cennter items-center flex-wrap p-2 m-2"
                      style  ={{
                        backgroundRepeat : 'no-repeat' , 
                        width : '15vw',
                        height : '16vh'
                      }}
                      >
                     <QBC data = {n_query}/>
                     </div>
                     </div>


                      
               </Card>
            </div>

            {/* ------------------------------------------------ */}  
            <div className='flex justify-center items-center'>
               <Card w = '64vw' h = '27vh' mt = '[2vh]'>
                  <div className='flex justify-between'>
                  <span><p style = {{display :"inline"}}> previous queries</p></span>
                  <span>
                  <a className='btn bg-[aqua] h-[1.5em] w-[10em] flex justify-center items-center ' 
                  style = {{
                     border : '2px black solid'
                  }}
                  > go to queries </a>
                  </span>
                  </div>

                  <hr className='w-[60vw]'></hr>
               </Card>
            </div>
            {/* ------------------------------------------------ */} 
            </div>
      {/* ------------------------------------------------------------------- */}

    </div>
  )
}
