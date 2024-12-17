// class 38
// =========== project 2 change bg color =============
// generate a random color

const randomColor = function (){
  let hexNum = '0123456789ASDF'
  let color  = '#'
for (let i = 0;   i < 6; i++) {
  color += hexNum[Math.floor(Math.random()* 10)]
}

return color
}


// console.log(randomColor());
let interval;

let startChangeColor = function(){
  let bodyColor =  document.querySelector('body')
   if(!interval){
    interval = setInterval(function(){
      bodyColor.style.backgroundColor = randomColor()
    },1000)
   }
 }


 let stopChangeColor = ()=>{
  clearInterval(interval)
  interval = null
 }

document.querySelector('#changeBgColor').addEventListener('click',startChangeColor )
document.querySelector('#stopChangeBgColor').addEventListener('click',stopChangeColor )