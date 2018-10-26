'use strict';

const colors = [
  '#FFFFFF',
  '#F44336',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548'
];
const time = document.querySelector('.js-time');
const btnStart = document.querySelector('.js-start');
const btnTakeLap = document.querySelector('.js-take-lap');
const btnReset = document.querySelector('.js-reset');
const lapsList = document.querySelector('.js-laps');

const timer = {
  isActive: false,
  isPaused: false,
  timerId: null,
  startTime: null,
  deltaTime: null,
  onTick: getFormattedTime,

  start() {
    if (!this.isActive) {
      if (!this.isPaused) {
        this.startTime = Date.now();
      } else {
        this.startTime = this.startTime + Date.now() - this.deltaTime;
      }

      this.timerId = setInterval(() => {
        const currentTime = Date.now();

        this.deltaTime = currentTime - this.startTime;

        const time = new Date(this.deltaTime);

        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ms = Number.parseInt(time.getMilliseconds() / 100);

        this.onTick({ min, sec, ms });
      }, 100);

      this.isActive = true;

      btnStart.textContent = 'Pause';
      console.log('START');
    } else {
      this.deltaTime = Date.now();
      this.isActive = false;
      this.isPaused = true;

      clearInterval(this.timerId);
      btnStart.textContent = 'Continue';
    }
  },

  takeLap() {
    const li = document.createElement('li');
    li.textContent = time.textContent;
    li.style.color = calcRandomColor(colors);
    
    lapsList.appendChild(li);
  },

  reset() {
    this.isActive = false;
    this.isPaused = false;

    clearInterval(this.timerId);

    time.textContent = `00:00.0`;
    btnStart.textContent = 'Start';

    lapsList.innerHTML = ''; //clear lapsList
  }
};

btnStart.addEventListener('click', timer.start.bind(timer));
btnTakeLap.addEventListener('click', timer.takeLap.bind(timer));
btnReset.addEventListener('click', timer.reset.bind(timer));

function getFormattedTime({ min, sec, ms }) {
  min = min < 10 ? (min = '0' + min) : min;
  sec = sec < 10 ? (sec = '0' + sec) : sec;

  time.textContent = `${min}:${sec}.${ms}`;
}

function calcRandomColor(arr) {
  const randomVal = arr[Math.floor(Math.random() * arr.length)];
  return randomVal;
}


