import '../styles/style.css'

import './includes/test'


//bacground
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circ = document.querySelectorAll('Circle');


const c = canvas.getContext('2d');

class Circle {
  constructor(x, y, radius, dx, dy, color, shadowBlur, shadowColor) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.shadowBlur = shadowBlur;
    this.shadowColor = shadowColor;
  }
  draw() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.shadowBlur = this.shadowBlur;
  c.shadowColor = this.shadowColor;
  c.fill();
  c.stroke();

  this.update();
  }
  update() {
  if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }

  this.x += this.dx;
  this.y += this.dy;
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shadowArray = [
  '#D2E2F9',
  '#C8D6FC',
];

const colorsArray = [
  '#D2E2F9',
  '#C8D6FC',
  '#21337F',
  '#93ACF2',
  '#3458AE',
  '#7699E7',
  '#B6C9FB',
];

const circlesArray = [];

for (let i = 0; i <200; i++) {
  let radius = 2.2;
  let x = Math.random() * (window.innerHeight - radius * 2) + radius;
  let y = Math.random() * (window.innerWidth - radius * 2) + radius;

  let dx = (Math.random() - 0.5) * 20;
  let dy = (Math.random() - 0.5) * 5;
  
  const colorIndex = randomInteger(1, colorsArray.length - 1);
  const shadowIndex = randomInteger(1, shadowArray.length - 1);
  
  circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex], 15, shadowArray[shadowIndex]));
}

console.log(circlesArray);

function animate () {
  requestAnimationFrame(animate);
  
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].draw();
  }
}

animate();


//js hero scripts

const btnplay = document.querySelector('.welcome-field__button');
const welcomefield = document.querySelector('.welcome-field');
const playfield = document.querySelector('.playing-field');
const jumping = 0;
btnplay.addEventListener('click', () => {
  welcomefield.remove();
  playfield.style.opacity = '0.4';
})


//playing-field
const obstruction1 = document.querySelector('.playing-field__obstruction1');
const obstruction2 = document.querySelector('.playing-field__obstruction2');
const mainmodel = document.querySelector('.playing-field__img');

obstruction2.addEventListener('animationiteration', () => {
  let random = -((Math.random()*420)+150);
  obstruction2.style.top = random + "px";
});

setInterval(function() {
  let mainmodelTop = parseInt(window.getComputedStyle(mainmodel).getPropertyValue("top"));
  if(jumping==0) {
  mainmodel.style.top = (mainmodelTop+3)+"px";
  }
  if(mainmodelTop>700) {
    // alert('game over');
  }
},10);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(function(){
    let mainmodelTop = 
    parseInt(window.getComputedStyle(mainmodel).getPropertyValue("top"));
    if((mainmodelTop>6)&&(counter<15)){
    mainmodel.style.top = (mainmodelTop-5)+"px";
    }
    if(jumpCount>20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  },10);
}