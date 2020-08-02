// A Counter that increases by 1 each second
// * Plus and Minus buttons that increment or decrement the counter
// * A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
// * A comment box that adds comments when submitted

let pauseC = false;

//start timer
function counterincrement() {
  let counter = document.getElementById("counter");
  let counterValue=parseInt(counter.innerHTML,10);
  if(pauseC == false){
    counterValue +=1;
    counter.innerHTML=`${counterValue}`;
    }
}

let intervalID = window.setInterval(counterincrement,1000);

//pause the counter
function pauseCounter(){
  window.clearTimeout(intervalID);
  if (!pauseC){
    pauseC = true ;
    document.getElementById("plus").removeEventListener("click",plusCounter);
    document.getElementById("minus").removeEventListener("click",minCounter);
    document.getElementById("pause").innerHTML = "resume";
  }else{
    pauseC = false ;
    plus.addEventListener("click" ,plusCounter);
    minus.addEventListener("click" , minCounter);
    window.setInterval(counterincrement,1000);
    document.getElementById("pause").innerHTML = "pause";
  }
  }

  let pause = document.getElementById('pause');
  pause.addEventListener('click',pauseCounter);

 ///////min/////////

  function minCounter(){
    let counter = document.getElementById("counter");
    let counterValue=parseInt(counter.innerHTML,10);
    if(pauseC == false){
      counterValue -=1;
      counter.innerHTML=`${counterValue}`;
      }
  }
  const minus =document.getElementById('minus');
  minus.addEventListener('click',minCounter);
  ///////////////////////

// add plus///
  function plusCounter(){
    let counter = document.getElementById("counter");
    let counterValue=parseInt(counter.innerHTML,10);
    if(pauseC == false){
      counterValue +=1;
      counter.innerHTML=`${counterValue}`;
      }
  }
  const plus =document.getElementById('plus');
  plus.addEventListener('click',plusCounter);

  ////////////add likes/////////////
  let like = document.getElementById("heart") ;
like.addEventListener("click" ,counterincrement);
//////////////////////////////


/////////////Add Comments/////////////
  const commnetForm= document.querySelector('#comment-form');
  commnetForm.addEventListener('submit',function(event){
    event.preventDefault();

    const commentInput=document.getElementById('comment-input').value;
    const commentLists =document.getElementById('list');
    const comment= document.createElement('p');
    comment.innerHTML=`${commentInput}`;
    commentLists.appendChild(comment);

  });
