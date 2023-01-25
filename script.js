//your code here
const cube = document.getElementById("cube");
let angle = 0;

setInterval(() => {
  angle += 1;
  cube.style.transform = `rotateY(${angle}deg) rotateX(${angle}deg)`;
}, 30);
