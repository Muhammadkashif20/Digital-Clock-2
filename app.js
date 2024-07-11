// Digital Watch With Animated Effect Project:-

let time=document.getElementById('time')
let ampm='AM';
setInterval(function () {
    let date=new Date()
    let hour=date.getHours()
    let mint=date.getMinutes()
    let sec=date.getSeconds()
   if(hour>12){
    ampm='PM'
    hour=hour-12
   }
   if(hour==12){
    ampm='AM'
   }
   if(hour<10){
    hour='0'+hour
   }
   if(mint<10){
    mint='0'+mint
   }
   if(sec<10){
    sec='0'+sec
   }
   
   time.innerText=`${hour} : ${mint} : ${sec} : ${ampm}`
},)