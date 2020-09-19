let counterElement = document.getElementById("counter");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let likesList = document.getElementsByClassName('likes')[0];
let pauseButton = document.getElementById("pause");
let commentIpunt = document.getElementById("comment-input");
let coommetDisplay = document.getElementsByClassName("comments")[0];
let submitButton = document.getElementById("submit");

let counter = 0;
let counterOn
let counterFun = () =>{
counterOn = setInterval(() => {
  counterElement.innerHTML = counter;
  counter++;
},1000);
}
counterFun();
minusButton.addEventListener("click", (e) =>{
  e.preventDefault();
  counter = counter -2;
  counterElement.innerHTML = counter;
});
plusButton.addEventListener("click", (e) =>{
  e.preventDefault();
  counter --;
  counterElement.innerHTML = counter;
});
var heart =0;
heartButton.addEventListener("click", (e) =>{
  e.preventDefault();
  heart ++;
  let li = document.createElement("li");
  li.innerHTML = counter + " has been liked " + heart + " time";
//  li.innerHTML = counter + " has been liked " + heart + " times";
  likesList.appendChild(li);
  heart =0;
});
var pauseClicked = 1
pauseButton.addEventListener("click", (e) =>{
  e.preventDefault();
  pauseClicked++;
  clearInterval(counterOn);
  var buttonsArray = document.querySelectorAll("button");
  buttonsArray.forEach(button => button.disabled = true);
  pauseButton.value = "reusume";
  pauseButton.addEventListener("click", (e) =>{
  e.preventDefault();
  counter = 0;
   counterFun()
   buttonsArray.forEach(button => button.disabled = false);
    pauseButton.value = "pause";
});
});
submitButton.addEventListener("click", e => {
  e.preventDefault();
  let p = document.createElement("p");
  p.innerHTML = commentIpunt.value;
  commentIpunt.value ="";
  coommetDisplay.appendChild(p);
})
