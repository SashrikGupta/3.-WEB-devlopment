import React , {useState} from 'react'
import { useContext } from 'react';
import { curr_context } from '../../contexts/background';

export default function Display() {
  
  const now_context = useContext(curr_context) ; 
  const tog = now_context.toggle
  console.log(tog) 
  const [mode , setmode] = useState(true) ; 

  const onDarkHandel = () => {
     setmode(true)
     document.getElementById('root').style.backgroundImage = `url( )`  
     if(now_context.theme == '') tog() 
  }

  const onCustomHandel = ()=>{
   setmode(false)
   document.getElementById('root').style.backgroundImage = `url(https://wallpapers.com/images/hd/4k-mountain-ekh308xu7o7v7nbt.jpg)`  
   if(now_context.theme == '#333333') tog()
  }

  const photoHandler = (index)=>{
  console.log(index) ; 
  document.getElementById('root').style.backgroundImage = `url(${url[index]})` 
  }

  const url = [
   "https://images.alphacoders.com/104/1049857.jpg" , 
   "https://www.pixground.com/wp-content/uploads/2023/09/Mountain-Range-Italy-4K-Wallpaper-jpg.webp" , 
   "https://wallpapers.com/images/featured/aesthetic-ocean-lpolmxs9yji9zs1u.jpg" , 
   "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3" , 
   "https://w0.peakpx.com/wallpaper/144/374/HD-wallpaper-neon-samurai-cyberpunk.jpg" , 
   "https://e1.pxfuel.com/desktop-wallpaper/259/46/desktop-wallpaper-anime-your-name-live-kimi-no-na-wa-pc.jpg" , 
   "https://media.istockphoto.com/id/1454162250/photo/beautiful-cosmic-4k-video-footage-gas-clouds-and-stars.webp?b=1&s=170667a&w=0&k=20&c=7BSrOB9fy4e1ml6_0gwAI-P2mP12Jn3o2QEffdBzdQw=",
   "https://e1.pxfuel.com/desktop-wallpaper/554/641/desktop-wallpaper-floating-in-space.jpg",
   "https://c4.wallpaperflare.com/wallpaper/268/183/676/black-holes-interstellar-movie-wallpaper-preview.jpg"
  ]

  return (
    <div>
      <h1 className='mb-4'> choose your theme  : </h1>
      <hr></hr>
      <div className='mt-2 flex justify-between'>
      <button className='btn btn-secondary' onClick = {onDarkHandel} > Dark mode</button>
      <button className='btn btn-primary ' onClick = {onCustomHandel}> Custom mode </button>
      </div>
      {
         mode ? <></> :
         <>
         <hr className='mt-2'></hr>
          <p className='my-2'> choose a background image </p>
          <hr className='mt-2'></hr>
         <div className="grid grid-cols-2 h-[60vh] overflow-auto md:grid-cols-3 gap-4 mt-2">
            {url.map((el, index)=>{
               return(
                  <button id = {`${index}`}>
                  <img className="h-[15vh] w-[30vw] rounded-lg" src={el} alt="" onClick = {()=>{photoHandler(index)}}/>
                  </button>
               ) 
            })}
    </div>
         </>

      }

    </div>
  )
}
