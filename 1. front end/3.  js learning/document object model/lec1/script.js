function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 


   let btn = document.createElement("button") ;
   btn.innerText = "click me  !" 
   
   let node = document.querySelector("body") ; 
   node.append(btn) ; 
   btn.style.backgroundColor = "red" ; 
   btn.style.color = "white" ; 
   btn.style.display = "inline-block" ; 
   btn.style.marginLeft = "9vw" ; 

   console.log(`your number is : ${getRandomInt(1,20)}` )

   btn.ondblclick = ()=> {
      let container = document.querySelector("#container");
      let box = document.createElement("div") ;  
      box.className = "box"
      container.append(box) ; 
      box.innerText = ` div : ${container.children.length}`  ;
   }
   
   let btn2 = document.querySelector("#btn2") ; 
   let func1 = () => {
      let body = document.querySelector("body");
      body.style.backgroundColor = "rgb(0, 248, 231 , 0.4)";
   }
   
   let func2 = () => {
      let body = document.querySelector("body");
      body.style.backgroundColor = "black";
      body.style.color = "white";
      let contain = document.querySelector("#container") ; 
      contain.style.backgroundColor = "rgba(255, 255, 255, 0.4)" ; 
      
   }
   
   btn2.addEventListener("click", func1);
   btn2.addEventListener("dblclick", func2);

   


 
