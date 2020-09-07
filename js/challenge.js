let intervalID;
let counter=0;
let likes=0;
function increaseCounter(){
  counter++;
  document.getElementById("counter").innerHTML=counter;
}
  function decreaseCounter(){
    --counter;
    document.getElementById("counter").innerHTML=counter;
  }
document.addEventListener('DOMContentLoaded',(e)=>{
  intervalID= setInterval(increaseCounter, 1000);
  document.getElementById("plus").addEventListener('click',(event)=>{
  event.preventDefault();
  increaseCounter();
});
document.getElementById("minus").addEventListener('click',(event)=>{
  event.preventDefault();
  decreaseCounter();
});
document.getElementById("heart").addEventListener('click',(event)=>{
  event.preventDefault();
  likes++;
  document.getElementById("heart").innerHTML=likes+" ❤️";
});
document.getElementById("pause").addEventListener('click',(event)=>{
  event.preventDefault();
  if(document.getElementById("pause").innerHTML===" pause "){
    document.getElementById("pause").innerHTML=" resume ";
    clearInterval(intervalID);
    counter=0;
  }
  else if(document.getElementById("pause").innerHTML===" resume "){
    document.getElementById("pause").innerHTML=" pause "
    intervalID= setInterval(increaseCounter, 1000);
  }
});
});
document.getElementById("submit").addEventListener('click',(event)=>{
  event.preventDefault();
  let para=document.createElement("p");
  para.innerHTML=document.getElementById("comment-input").value;
 document.getElementById("list").appendChild(para);
 document.getElementById("comment-input").value="";
});
