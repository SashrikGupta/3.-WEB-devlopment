
//------------------------------------------------------utility functions--------------------------------------------------------------------------------------------//

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mapper(i) {
   if (i == 1) { return "paper"; }
   if (i == 2) { return "scissor"; }
   if (i == 3) { return "rock"; }
}

//----------------------------------------------------------------declarations---------------------------------------------------------------------------------------//

let mycard = document.querySelector("#mypoints") ; 
let cmcard = document.querySelector("#cmpoints") ; 
let msg = document.querySelector("#message") ; 
let hola = document.querySelector(".hola") ; 
let computer = document.querySelectorAll(".boxc");
let choice = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".homa")[0] ; 
let rock = choice[0];
let paper = choice[1];
let scissor = choice[2];
let output = 0;
let flag = true;
let result = 0 ;
let id ; 
let cmres = 1;  
let my_score =0 ; 
let cm_score =0 ; 
let start = false ; 

//----------------------------------------------------------------calculatory function-------------------------------------------------------------------------------//


// 1. for changing messages 
function changemsg(res , a , b ){

   let mx =a ;
   let mn =b ; 
   if(a<b){mx = b ; mn = a ;  }
   if(a==1 && b==3 ){mx = a ; mn = b ;}
   if(a==3 && b==1 ){mx = b ; mn = a ;} 
   let t ; 
   let out = mapper(mx) ; 
   let cm = mapper(mn) ; 
   if(res==0){t= "Its's a draw" ; msg.style.backgroundColor = "darkslateblue" ;}
   if(res==1)
   { 
      t= "you won ! " ; 
     msg.style.backgroundColor = "rgb(14, 250, 53)" ;
     t = t + ": "+out+" beats "+cm  ; 
     my_score++ ; 
   }
   if(res==2)
   {
      t= "you lost" ; 
      msg.style.backgroundColor = "rgb(211, 18, 18)" ;
      t = t + ": "+out+" beats "+cm  ;
      cm_score++ ; 
   } 
    mycard.innerText = my_score ; 
    cmcard.innerText = cm_score ; 
   msg.textContent = t;
 }

// 2. for calculation of result
function func() {
      clearInterval(id);
      flag = false;
      idx = getRandomInt(0, 2);
      let cmres = idx;
      if (cmres == 0) { cmres = 3; }
      let bt = computer[idx];
      let id2 =  setInterval(() => {
         bt.style.border = "6px black solid";
      }, 1);
      setTimeout(()=>{clearInterval(id2)} , 2000) ;
      console.log(bt);
      if (output == cmres) { result = 0; }
      else if (output == 1 && cmres == 3) { result = 1; }
      else if (output == 3 && cmres == 1) { result = 2; }
      else if (output > cmres) { result = 1; }
      else if (output < cmres) { result = 2; }
      changemsg(result, output, cmres);
      setTimeout(() => {
         clearInterval(id);
         bt.style.border = "none";
         applyRandomStyle(true);
      }, 2000);
   }
 
// 3.applying animation 
function applyRandomStyle(gate) {
      if (gate) {
         id = setInterval(() => {
            let idx = getRandomInt(0, 2);
            let bt = computer[idx];
            bt.style.border = "6px black solid";
            setTimeout(() => { bt.style.border = "none"; }, 100);
         }, 100);
      }
   }


//----------------------------------------------------------------event handeling------------------------------------------------------------------------------------//

hola.addEventListener("click" , ()=>{ applyRandomStyle(true);})
rock.addEventListener("click", () => { output = 3;func();  });
paper.addEventListener("click", () => { output = 1;func(); });
scissor.addEventListener("click", () => { output = 2;func(); });
reset.addEventListener("click" , ()=>{
   my_score = 0;
   cm_score = 0;
   mycard.innerText = my_score;
   cmcard.innerText = cm_score;
   msg.innerText = "Pick your move" ;
   flag = false ;
   clearInterval(id) ;
   msg.style.backgroundColor = "darkslateblue" ;

   })



  

