'use strict';

const time = document.querySelector('.js-time');
const btnStart = document.querySelector('.js-start');
const btnTakeLap = document.querySelector('.js-take-lap');
const btnReset = document.querySelector('.js-reset');
const lapsList = document.querySelector('.js-laps');
const btnPause = document.querySelector('.js-pause');

const timer = {
  isActive: false,
  timerId: null,
  startTime: null,
  deltaTime: null,
  onTick: lapsListUpdate,

  start() {
    if (!this.isActive) {
      this.isActive = true;
      btnStart.textContent = 'Pause';

      console.log('START');

      this.startTime = Date.now();

      this.timerId = setInterval(() => {
        const currentTime = Date.now();

        this.deltaTime = currentTime - this.startTime;

        const time = new Date(this.deltaTime);

        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ms = Number.parseInt(time.getMilliseconds() / 100);

        this.onTick({ min, sec, ms });
      }, 100);
    }
  },

  pause() {
    if (this.isActive) {
      
    }
  },

  takeLap() {
    const li = document.createElement('li');
    li.textContent = time.textContent;
    lapsList.appendChild(li);
  },

  reset() {
  }
};

btnStart.addEventListener('click', timer.start.bind(timer));
btnPause.addEventListener('click', timer.pause.bind(timer));
btnTakeLap.addEventListener('click', timer.takeLap.bind(timer));
btnReset.addEventListener('click', timer.reset.bind(timer));

function lapsListUpdate({ min, sec, ms }) {
  if (min < 10) {
    min = '0' + min;
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  time.textContent = `${min}:${sec}.${ms}`;
}
