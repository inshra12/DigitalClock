let hrs=document.getElementById('hrs')
let mint=document.getElementById('mint')
let sec=document.getElementById('sec')

   setInterval(() => {
    let clock=new Date();
    hrs.innerHTML=(clock.getHours()<10?"0":"")+clock.getHours();
    mint.innerHTML=(clock.getMinutes()<10?"0":"")+clock.getMinutes();
    sec.innerHTML=(clock.getSeconds()<10?"0":"")+clock.getSeconds();
}, 1000);