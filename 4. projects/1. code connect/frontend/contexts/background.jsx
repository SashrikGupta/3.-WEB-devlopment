import React, { createContext, useContext, useState, useEffect } from "react";

export const curr_context = createContext();

export default function BG(props) {
 
  const storedTheme = localStorage.getItem("theme"); 
  const storedind = localStorage.getItem("ind") ; 
  const storedmode = localStorage.getItem("mode") ; 
  const [theme, setTheme] = useState('#333333');
  const [ind , setind] = useState(storedind || -1)
  const [mode , setmode] = useState(storedmode || 2)

  const url = [
    "https://images.alphacoders.com/104/1049857.jpg" , 
    "https://www.pixground.com/wp-content/uploads/2023/09/Mountain-Range-Italy-4K-Wallpaper-jpg.webp" , 
    "https://wallpapers.com/images/featured/aesthetic-ocean-lpolmxs9yji9zs1u.jpg" , 
    "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3" , 
    "https://wallpapercave.com/wp/wp2757880.gif" , 
    "https://i.pinimg.com/originals/1d/a3/66/1da3663ce1d7d0f6098a31a667e862b4.gif" , 
    "https://media.istockphoto.com/id/1454162250/photo/beautiful-cosmic-4k-video-footage-gas-clouds-and-stars.webp?b=1&s=170667a&w=0&k=20&c=7BSrOB9fy4e1ml6_0gwAI-P2mP12Jn3o2QEffdBzdQw=",
    "https://e1.pxfuel.com/desktop-wallpaper/554/641/desktop-wallpaper-floating-in-space.jpg",
    "https://c4.wallpaperflare.com/wallpaper/268/183/676/black-holes-interstellar-movie-wallpaper-preview.jpg"
   ]


  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("ind", ind);
    localStorage.setItem("mode", mode);
    if(ind!=-1) {
    document.getElementById('root').style.backgroundImage = `url(${url[ind]})`
    setTheme('') ; 
    }
    else{
      document.getElementById('root').style.backgroundImage = `url( )`
      setTheme('#333333')
    }
  }, [ mode  , ind]);


  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "#333333" ? "k" : "#333333"));
  };

  return (
    <>
      <curr_context.Provider value={{ theme, toggle , ind , setind , mode , setmode  , url}}>
        {props.children}
      </curr_context.Provider>
    </>
  );
}
