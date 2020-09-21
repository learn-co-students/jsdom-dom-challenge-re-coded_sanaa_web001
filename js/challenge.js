document.addEventListener("DOMContentLoaded", function(){
    let counter = document.getElementById("counter"),
        minus = document.getElementById("minus"),
        plus = document.getElementById("plus"),
        like = document.getElementById("heart"),
        pause = document.getElementById("pause");

    let numbersArray = [];

    let interval = setInterval(countUp, 1000);

    function countUp() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }

    function countDown() {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
    }

    minus.addEventListener("click", () => {
        clearInterval(interval);
        countDown();
     });

    plus.addEventListener("click", () => {
        clearInterval(interval);
        countUp();
     });


     function pasueFun() {
        if (pause.innerHTML = "pause") {
            pause.addEventListener("click", () => {
                pause.innerHTML = "resume";
                clearInterval(interval);
            });
        }



                    pause.addEventListener("click", () => {
                        if (pause.innerHTML = "resume") {
                            clearInterval(interval);
                            setInterval(countUp, 1000);
                            pause.innerHTML = "pause";

                        }
                    });


     }


    // like.addEventListener("click", () => {
    //     let x = 0;
    //     x++;


    //     let ul = document.getElementById("numOfLikes");
    //     let li = document.createElement("li");
    //     li.innerHTML = `${counter.innerHTML} has ${} likes`;
    //     ul.appendChild(li);

    // });





















});
