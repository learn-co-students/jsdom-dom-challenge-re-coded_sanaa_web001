const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const pause = document.querySelector("#pause");
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const commentList = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");

var isPause = false; // pause/resume flag

function timer() {
  return setInterval(function () {
    let countNumber = parseInt(counter.innerText);
    countNumber++;
    counter.innerText = countNumber.toString();
  }, 1000);
}

var interval = timer();

minus.addEventListener("click", (e) => {
  let countNumber = parseInt(counter.innerText);
  countNumber--;
  counter.innerText = countNumber.toString();
});

plus.addEventListener("click", (e) => {
  let countNumber = parseInt(counter.innerText);
  countNumber++;
  counter.innerText = countNumber.toString();
});

pause.addEventListener("click", (e) => {
  if (isPause == false) {
    clearInterval(interval);
    pause.innerText = "resume";
    isPause = true;
  } else {
    console.log(interval);
    interval = timer();
    pause.innerText = "pause";
    isPause = false;
  }
});


heart.addEventListener("click", (e) => {    
    let likeItem = document.createElement("li");
    likeItem.innerHTML = `${counter.innerText} has been liked <span>1</span> time`;
    likes.appendChild(likeItem);
})

function likeTimes(){

}


commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let comment =  commentInput.value;
    console.log(comment);
    let printedComment = document.createElement("p");
    printedComment.innerText = comment;
    commentList.appendChild(printedComment);
    commentInput.value = "";
})

