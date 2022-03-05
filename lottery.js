const input = document.getElementById('input');
const button = document.getElementById('button');
const number = document.getElementById('number');
const start = document.getElementById('start');

let num = null;

input.addEventListener('input', () => {
  num = input.value;
});

input.addEventListener('keypress', () => {
  if (window.event.keyCode === 13) {
    renderNum();
  }
});

function renderNum() {
  if (num) {
    number.innerText = `인원 수: ${num}`;
    start.disabled = false;
    input.value = null;
  } else {
    alert('숫자를 입력하세요');
  }
}

button.addEventListener('click', renderNum);

function randomNum(n) {
  return Math.floor(Math.random() * n + 1);
}

function lottery() {
  alert(`${randomNum(num)}번이 당첨되셨습니다!`);
}

start.addEventListener('click', lottery);
