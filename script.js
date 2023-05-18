const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let displayText = document.getElementById('display-text');

let zeroButton = document.getElementById('0');
let oneButton = document.getElementById('1');
let twoButton = document.getElementById('2');
let threeButton = document.getElementById('3');
let fourButton = document.getElementById('4');
let fiveButton = document.getElementById('5');
let sixButton = document.getElementById('6');
let sevenButton = document.getElementById('7');
let eightButton = document.getElementById('8');
let nineButton = document.getElementById('9');

zeroButton.addEventListener('click', () => {
  displayText.innerText = zeroButton.innerText;
});
oneButton.addEventListener('click', () => {
  displayText.innerText = oneButton.innerText;
});
twoButton.addEventListener('click', () => {
  displayText.innerText = twoButton.innerText;
});
threeButton.addEventListener('click', () => {
  displayText.innerText = threeButton.innerText;
});
fourButton.addEventListener('click', () => {
  displayText.innerText = fourButton.innerText;
});
fiveButton.addEventListener('click', () => {
  displayText.innerText = fiveButton.innerText;
});
sixButton.addEventListener('click', () => {
  displayText.innerText = sixButton.innerText;
});
sevenButton.addEventListener('click', () => {
  displayText.innerText = sevenButton.innerText;
});
eightButton.addEventListener('click', () => {
  displayText.innerText = eightButton.innerText;
});
nineButton.addEventListener('click', () => {
  displayText.innerText = nineButton.innerText;
});
