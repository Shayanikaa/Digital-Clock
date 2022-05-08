console.log("hello guys");
let seconds = 00;
let mini = 00;
let h = 00;
let platbtn = document.getElementById('start');
let pausebtn = document.getElementById('pause');
let resetbtn = document.getElementById('rese');
let hour = document.getElementById('hour');
let mins = document.getElementById('miniuts');
let sec = document.getElementById('second');
let interval;

platbtn.addEventListener('click',()=>{
    interval=setInterval(startTimer,1);
    
})
pausebtn.addEventListener('click',()=>{
    clearInterval(interval);
})
resetbtn.addEventListener('click',()=>{
    clearInterval(interval);
    h = 00;
    seconds = 00 ;
    mini =00;
    hour.innerHTML = '00 :';
    mins.innerHTML = ' 00 :';
    sec.innerHTML = ' 00';
})

function startTimer(){
    seconds++;
    if(seconds <= 9){
       sec.innerHTML = '0'+seconds; 
    }
    if(seconds >9){
        sec.innerHTML = seconds;
    }
    if(seconds>60){
        mini++;
        mins.innerHTML = '0' +mini +' :';
        seconds =00;
    }
    if(mini >9){
        mins.innerHTML = mini + ' :';
    }
    if(mini>60){
        h++;
        hour.innerHTML = '0'+ h+' :';
       mini = 00;
    }
    if(h>9){
        hour.innerHTML = h+' :';
    }
}

