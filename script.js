const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const stopWatch = document.querySelector(".stop-watch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;

let timesArray = []

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopWatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopWatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopWatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
    time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`

    if(stopWatch.textContent !== `0:00`){
        time.style.visibility = 'visible'
        timesArray.push(stopWatch.textContent)
    }

	clearInterval(countTime);
	stopWatch.textContent = `0:00`;
	timeList.textContent = `0:00`;
	seconds = 0;
	minutes = 0;
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
