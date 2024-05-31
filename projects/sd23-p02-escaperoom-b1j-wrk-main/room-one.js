let numbers = [];
let emptyCellIndex;
let numMoves = 0;
let timer;

function init() {
    numbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    emptyCellIndex = numbers.indexOf(0);
    render();
}

function shuffle(arr) {
    let shuffledArr = arr.slice(0);
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
}

function move(evt) {
    let clickedCellIndex = evt.target.id.split('-')[1];
    let diff = clickedCellIndex - emptyCellIndex;
    if (diff === 1 || diff === -1 || diff === 4 || diff === -4) {
        numMoves += 1;
        [numbers[clickedCellIndex], numbers[emptyCellIndex]] = [numbers[emptyCellIndex], numbers[clickedCellIndex]];
        emptyCellIndex = clickedCellIndex;
        render();
        if (isGameOver()) {
            stopTimer();
            setTimeout(function () { alert(`Congratulations, you fixed the time machine in ${numMoves} moves!,oh no you have fallen in!`) }, 100);
        }
    }
}

function isGameOver() {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] !== i + 1) {
            return false;
        }
    }
    return true;
}

function render() {
    for (let i = 0; i < numbers.length; i++) {
        let cell = document.getElementById(`cell-${i}`);
        cell.innerText = numbers[i];
        cell.classList.remove('empty');
        if (numbers[i] === 0) {
            cell.classList.add('empty');
        }
    }
    let numMovesElement = document.getElementById('num-moves');
    numMovesElement.innerText = numMoves;
}

function startTimer() {
    let seconds = 0;
    timer = setInterval(() => {
        seconds += 1;
        let timeElement = document.getElementById('time');
        timeElement.innerText = seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function reset() {
    numMoves = 0;
    stopTimer();
    init();
    let timeElement = document.getElementById('time');
    timeElement.innerText = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    init();
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell) {
        cell.addEventListener('click', move);
    });
    let resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', reset);
    startTimer();
});
