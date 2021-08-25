function touches(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}
const doggy = document.querySelector('#myDog');
const ball = document.querySelector('#myBall');
let count = 0;
const myH1 = document.createElement('h1');
const init = () => {
    moveBall();
    window.addEventListener('keyup', function(event) {
        if (event.key === 'ArrowDown' || event.key === 'Down') {
            moveVertically(doggy, 50);
            //console.log('clicked');
        } else if (event.key === 'ArrowUp' || event.key === 'Up') {
            moveVertically(doggy, -50);
        } else if (event.key === 'ArrowRight' || event.key === 'Right') {
            moveHorizontally(doggy, 50);
            doggy.style.transform = 'scale(1,1)';
        } else if (event.key === 'ArrowLeft' || event.key === 'Left') {
            moveHorizontally(doggy, -50);
            doggy.style.transform = 'scale(-1,1)';
        }
        if (touches(doggy, ball)) {
            myH1.classList.add('score');
            myH1.innerText = `Score is ${++count}`;
            this.document.body.appendChild(myH1);
            moveBall();
        }
    });
}

const moveVertically = (element, pos) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + pos}px`;
}

const moveHorizontally = (element, pos) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + pos}px`;
};

const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2));
};

const moveBall = () => {
    const xAxis = Math.floor(Math.random() * window.innerWidth);
    const yAxis = Math.floor(Math.random() * window.innerHeight);
    ball.style.left = `${yAxis}px`;
    ball.style.top = `${xAxis}px`;
}

init();