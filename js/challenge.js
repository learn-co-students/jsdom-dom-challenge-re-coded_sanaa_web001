let puaseF = false ;

   let intervalId = window.setInterval(
    function () {
        let counter = document.getElementById("counter") ;
        let valueS = counter.innerHTML ;
        let valueI = parseInt(valueS , 10) ;
        if (!puaseF){
          valueI += 1 ;
          counter.innerHTML = `${valueI}`;
        }


  }, 1000);


let increment = document.getElementById("plus") ;
increment.addEventListener("click" ,inc_fuc);
function inc_fuc(e){
  inc_dec (true) ;
}

let decrement = document.getElementById("minus") ;
decrement.addEventListener("click" , dec_fuc);
function dec_fuc(e){
  inc_dec (false) ;
}

let like = document.getElementById("heart") ;
like.addEventListener("click" , (e) => {

 intervalId;

});

let pause = document.getElementById("pause") ;
pause.addEventListener("click" , (e) => {
  if (!puaseF){
    puaseF = true ;
    document.getElementById("plus").removeEventListener("click", inc_fuc);
    document.getElementById("minus").removeEventListener("click", dec_fuc);
    document.getElementById("pause").innerHTML = "resume";
  }else{
    puaseF = false ;
    increment.addEventListener("click" ,inc_fuc);
    decrement.addEventListener("click" , dec_fuc);
    document.getElementById("pause").innerHTML = "pause";
  }

});

function inc_dec (bol) {
  let counter = document.getElementById("counter") ;
  let valueS = counter.innerHTML ;
  let valueI = parseInt(valueS , 10)
  if (bol){
    valueI += 1 ;
  }else{
    valueI -= 1 ;
  }
  counter.innerHTML = `${valueI}`;
}

  let submit = document.getElementById('comment-form');
      submit.addEventListener('submit', (e) => {
          e.preventDefault();
         let input = document.getElementById("comment-input").value;
         let comment = document.querySelector("#list");
         let p = document.createElement('p');
         p.innerHTML =`${input} `;
         comment.appendChild(p);

});
