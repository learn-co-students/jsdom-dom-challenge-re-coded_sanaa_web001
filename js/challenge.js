let counter=0;
let l =0;
let o = 1;
let count=document.getElementById("counter");
let minus=document.getElementById("minus");
let plus=document.getElementById("plus");
let heart=document.getElementById("heart");
let likes=document.getElementById("likes");
let pause=document.getElementById("pause");
let list=document.getElementById("list");
let submit=document.getElementById("submit");
let commentInput=document.getElementById("comment-input");
let set=window.setInterval(myCallback, 1000);
function myCallback(){
  counter++
  count.innerHTML=counter;
}
minus.addEventListener("click",function(){
  --counter;
  count.innerHTML=counter;
})
plus.addEventListener("click",function(){
  ++counter;
  count.innerHTML=counter;
})


pause.addEventListener("click",function(){
  if(pause.innerHTML==="pause"){
    window.clearInterval(set);
    pause.innerHTML="continue";}
    else{
      set=window.setInterval(myCallback, 1000);
      pause.innerHTML="pause";
    }
})
heart.addEventListener("click",function(){
  let m =counter;
  let O = o;
  let select =document.getElementById(m);
  if(select){
    O=select.innerHTML.slice(-3);
    select.innerHTML=`${counter} has   ${++O}`
    console.log(select.innerHTML)
  }
  else{
  let li = document.createElement("li");
  li.setAttribute("id",m);
  li.innerHTML=`${counter} has   ${O}`
  likes.appendChild(li);
  }
 
})
submit.addEventListener("click",function(event){
  let text = document.createTextNode(commentInput.value);
  let p = document.createElement("p");
  p.appendChild(text);
  list.appendChild(p);
  event.preventDefault()
})