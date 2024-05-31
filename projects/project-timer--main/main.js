const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let audio = document.getElementById("audio");

let intervalId;
let seconds = 0;

function updateTimer() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  seconds++;
}

startBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  timer.textContent = '00:00';
});

