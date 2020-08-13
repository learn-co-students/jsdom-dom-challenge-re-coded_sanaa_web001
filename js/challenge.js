document.addEventListener('DOMContentLoaded',function(){
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes =  document.getElementById('likes');
let list =document.getElementById('list');
let input =document.getElementById('comment-input');
let submit = document.getElementById('submit');
let form = document.getElementById('comment-form');
let but = document.getElementsByTagName("button");



form.addEventListener('submit',function(e){
    e.preventDefault();
    let p = document.createElement('p');
    p.innerHTML = input.value;
    list.appendChild(p);
console.log('dfsd');
});



let timer = function (){
    return setInterval(function(){
        var counter = document.getElementById("counter"),
         countInt= parseInt(counter.innerHTML);
        counter.innerHTML = countInt + 1;

    },1000);
}

let interval =timer();
console.log(interval);
minus.addEventListener('click',function(){
    var counter =document.getElementById("counter"),
     countInt= parseInt(counter.innerHTML);
    counter.innerHTML = countInt - 1;
});
plus.addEventListener('click',function(){
    var counter =document.getElementById("counter"),
    countInt= parseInt(counter.innerHTML);
   counter.innerHTML = countInt+ 1;
});


  
var playing = true;
pause.addEventListener("click", function () {
    playing ? (playing = false, clearInterval(interval), this.innerText = "resume") : (playing = true, interval = timer(), this.innerText = "pause"),
    _toConsumableArray(document.getElementsByTagName("button")).forEach(function (a) { "pause" !== a.id && (a.disabled = !playing) });
});


function _toConsumableArray(a) {
  let  newArr = [];
    if (Array.isArray(a)) 
    { for (var b = 0; b < a.length; b++)
        newArr[b] = a[b]; return newArr }
    return Array.from(a)
}
});