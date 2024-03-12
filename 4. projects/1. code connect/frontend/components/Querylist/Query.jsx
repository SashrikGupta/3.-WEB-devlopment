import React from 'react'

export default function Query({bg , title  , tag  , type , sender , solver , points , description }) {


   
  // as of now prop drilling has been implimeted but context api needs to be implimented 

  return (

      <div className={`bg-[${bg}] px-4 py-3 mb-2 sm:px-6 shadow overflow-hidden sm:rounded-md max-w-[80vw] mx-auto `}>
          <div className="flex items-center justify-between">
            <div>
               <h3 className="text-lg leading-6 font-medium text-white mb-1">
               <span className='bg-secondary rounded-lg px-2'>{title}</span>
               &nbsp; &nbsp;
               <span className='bg-secondary rounded-lg px-2'>{tag}</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               </h3>
               <hr></hr>
               <p>{description}</p>
            </div>
            <div className="w-[10vw] flex items-center justify-center rounded-lg bg-[gold] text-black font-medium hover:text-indigo-500">
               {points} 🪙
            </div>
          </div>
          <div className="my-1 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">Status: <span className={`${type.style_status}`}>{type.status}</span></p>
            <a href={`${type.link}`} className={`${type.style_button}`}>{type.button}</a>
          </div>
          <p> 
            <span className='border-2 border-gray-800 rounded-lg '> &nbsp; author&nbsp; </span>  &nbsp; : &nbsp;
            <span className='bg-secondary px-1 rounded-md border-2 border-gray-800 '>{sender}</span> 
            <span className={`${type.solver}`}>
            &nbsp; |  &nbsp;
            <span className='border-2 border-gray-800 rounded-lg '> &nbsp; solver&nbsp; </span>  &nbsp; : &nbsp;
            <span className='bg-secondary px-1 rounded-md border-2 border-gray-800 '>{solver}</span> 
            </span>
         </p>
    </div>
  )
}
