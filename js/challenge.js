var counter=0,isStopped=false,currentLikes=0;
var counterElement=document.getElementById("counter");
var btnCounterIncrement=document.getElementById("plus");
var btnCounterDecrement=document.getElementById("minus");
var btnPauseCounter=document.getElementById("pause");
var btnLikeNumb=document.getElementById("heart");
var likesList=document.getElementsByClassName("likes")[0];
var btnSubmitComment=document.getElementById("submit");
var listComments=document.getElementById("list");
var commentInput=document.getElementById("comment-input");

btnSubmitComment.addEventListener("click", function(event){
    event.preventDefault();
    if(commentInput.value!=""){
        y=document.createElement("div");
       var x= document.createTextNode(commentInput.value);
       y.appendChild(x);
        listComments.appendChild(y);
        commentInput.value="";
    }
   
});

btnCounterIncrement.addEventListener("click",function(){
    
    increment();
});
btnCounterDecrement.addEventListener("click", function(){
    decrement();
});

btnPauseCounter.addEventListener("click",function(){
   
    if(isStopped){
        isStopped=false;
        btnPauseCounter.innerHTML="Pause";
    }else{
       
        isStopped=true;
btnPauseCounter.innerHTML="Resume";

    }
    toggleElements();
    btnPauseCounter.disabled=false;
});

btnLikeNumb.addEventListener("click",function(){
   currentLikes++;
});

function toggleElements(){
    y=document.querySelectorAll("button");
    document.querySelector("input").disabled=isStopped;
    y.forEach(element => {
        element.disabled=isStopped;
    });
}
function increment(){
    counterElement.innerHTML=++counter;
}
function decrement(){
    counterElement.innerHTML=--counter;
}
function addLikes(){

    likes=  currentLikes;
    currentLikes=0;
        var listItem=document.createElement("li");
        // alert(listItem);
        listItem.innerHTML=`${counter} number is liked ${likes}`;
        likesList.appendChild(listItem);
    
}
function incrementInterval(){
    
    if(currentLikes!=0){
        // console.log(currentLikes);
        addLikes();
    }
    if(!isStopped){
      
       increment();
    }

   
   
}
setInterval(incrementInterval,1000);