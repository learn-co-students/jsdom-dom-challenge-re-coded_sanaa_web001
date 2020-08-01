document.addEventListener('DOMContentLoaded', function() {

    let plus = select('plus');
    let minus = select('minus');
    let pause = select('pause');
    let heart = select('heart');
    let counter = select('counter');
    let commentInput = select('comment-input');
    let submitButton = select('submit');

    let likes = 0;
    let lastLikeElementId;

    let isCounting = true;

    let timerValue = setInterval(count, 1000, counter);

    plus.addEventListener('click', function() {
        counter.innerText = parseInt(counter.innerText) + 1;
    });

    minus.addEventListener('click', function() {
        counter.innerText = parseInt(counter.innerText) - 1;
    });

    pause.addEventListener('click', function() {
        if (isCounting) {
            stopCount(timerValue);
            setContent(pause, 'Resume');
            setDisabled(plus, 'disabled');
            setDisabled(minus, 'disabled');
            setDisabled(heart, 'disabled');
            setDisabled(submitButton, 'disabled');
        } else {
            timerValue = setInterval(count, 1000, counter);
            setContent(pause, 'Stop');
            removeDisabled(plus);
            removeDisabled(minus);
            removeDisabled(heart);
            removeDisabled(submitButton);
        }
    });

    heart.addEventListener('click', function() {
        console.log(lastLikeElementId, counter.innerText)
        if (lastLikeElementId == 'e-' + counter.innerText) {
            let likeTimes = document.querySelector(`#${lastLikeElementId} #times`);
            editContent(lastLikeElementId, `${counter.innerText} has been liked <span id='times'>${parseInt(likeTimes.innerText) + 1}</span> times`);
        } else {
            let addedElement = createAppend('li', document.getElementsByClassName('likes')[0], counter.innerText);
            setContent(addedElement, `${counter.innerText} has been liked <span id='times'>1</span> time`);
        }
    });

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        let addedComment = createAppend('p', select('list'));
        console.log(addedComment);
        addedComment.innerHTML = commentInput.value;
    });

    function select(elementId) {
        return document.getElementById(elementId);
    }

    function count(counter) {
        counter.innerText = parseInt(counter.innerText) + 1;
        isCounting = true;
    }

    function stopCount(IntervalValue) {
        clearInterval(IntervalValue);
        isCounting = false;
    }

    function setContent(element, content) {
        element.innerHTML = content;
        return element;
    }

    function setDisabled(element, status) {
        element.setAttribute(status, '');
    }


    function removeDisabled(element) {
        element.removeAttribute('disabled');
    }

    function createAppend(elementName, parentElement, counterValue) {
        let element = document.createElement(elementName);
        if (counterValue) {
            element.setAttribute('id', 'e-' + counterValue);
            lastLikeElementId = 'e-' + counterValue;
        }
        return parentElement.appendChild(element);
    }

    function editContent(elementId, content) {
        select(elementId).innerHTML = content;
        return select(elementId);
    }
});