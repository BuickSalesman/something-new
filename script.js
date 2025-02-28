let count = 1;
let heckYeahCount = 0;
let prevHeckYeahTime,
  timerInterval,
  elapsedHeckYeahTime = 0;
let time = 0;
let interval = 0;
let elapsedTimeSegments = [];
let timeIndex = 0;
let startTime = 0;

const coolButton = document.getElementById("cool-button");
const heckYeahs = document.getElementById("heck-yeahs");
const heckYeahTimer = document.getElementById("heck-yeah-time");
const averageDisplay = document.getElementById("avg-heck-yeah");
const heckYeahMusic = document.getElementById("audio");

coolButton.addEventListener("click", coolFunction);

function coolFunction() {
  count += 1;
  if (count % 2 === 0) {
    heckYeahCount += 1;
    coolButton.style.backgroundImage = "url('./assets/button-gif.webp')";
    heckYeahs.textContent = `heck yeahs: ${heckYeahCount}`;
    startHeckYeahTimer();
    startMusic();
  } else {
    coolButton.style.backgroundImage = null;
    stopHeckYeahTimer();
    updateAverageDisplay();
    stopMusic();
  }
}

function startMusic() {
  heckYeahMusic.play();
}

function stopMusic() {
  heckYeahMusic.pause();
}

function startHeckYeahTimer() {
  startTime = time;
  interval = setInterval(() => {
    time += 1;

    if (time % 100 === 60) {
      time += 40;
    }
    if (Math.floor(time / 100) % 100 === 60) {
      time += 4000;
    }
    if (Math.floor(time / 10000) % 100 === 60) {
      time += 400000;
    }

    if (time >= 0 && time < 10) {
      heckYeahTimer.textContent = `time heck yeahing: 00:00:00:0${time}`;
    } else if (time >= 10 && time < 100) {
      heckYeahTimer.textContent = `time heck yeahing: 00:00:00:${time.toString().slice(-1)}${time
        .toString()
        .slice(0, 1)}`;
    } else if (time >= 100 && time < 1000) {
      heckYeahTimer.textContent = `time heck yeahing: 00:00:0${time.toString().slice(0, 1)}:${time
        .toString()
        .slice(1, 2)}${time.toString().slice(2, 3)}`;
    } else if (time >= 1000 && time < 10000) {
      heckYeahTimer.textContent = `time heck yeahing: 00:00:${time.toString().slice(0, 1)}${time
        .toString()
        .slice(1, 2)}:${time.toString().slice(2, 3)}${time.toString().slice(3, 4)}`;
    } else if (time >= 10000 && time < 100000) {
      heckYeahTimer.textContent = `time heck yeahing: 00:0${time.toString().slice(0, 1)}:${time
        .toString()
        .slice(1, 2)}${time.toString().slice(2, 3)}:${time.toString().slice(3, 4)}${time.toString().slice(4, 5)}`;
    } else if (time >= 100000 && time < 1000000) {
      heckYeahTimer.textContent = `time heck yeahing: 00:${time.toString().slice(0, 1)}${time
        .toString()
        .slice(1, 2)}:${time.toString().slice(2, 3)}${time.toString().slice(3, 4)}:${time.toString().slice(4, 5)}${time
        .toString()
        .slice(5, 6)}`;
    } else if (time >= 1000000 && time < 10000000) {
      heckYeahTimer.textContent = `time heck yeahing: 0${time.toString().slice(0, 1)}:${time
        .toString()
        .slice(1, 2)}${time.toString().slice(2, 3)}:${time.toString().slice(3, 4)}${time.toString().slice(4, 5)}:${time
        .toString()
        .slice(5, 6)}${time.toString().slice(6, 7)}`;
    } else if (time >= 10000000 && time < 100000000) {
      heckYeahTimer.textContent = `time heck yeahing: ${time.toString().slice(0, 1)}${time
        .toString()
        .slice(1, 2)}:${time.toString().slice(2, 3)}${time.toString().slice(3, 4)}:${time.toString().slice(4, 5)}${time
        .toString()
        .slice(5, 6)}:${time.toString().slice(6, 7)}${time.toString().slice(7, 8)}`;
    } else {
      heckYeahTimer.textContent = "time heck yeahing: heck yeah B)";
    }
  }, 10);
}

function stopHeckYeahTimer() {
  timeIndex += 1;
  clearInterval(interval);
  elapsedTimeSegments.push(time - startTime);
  console.log(elapsedTimeSegments);
}

function updateAverageDisplay() {
  let average = elapsedTimeSegments.reduce((a, b) => a + b) / elapsedTimeSegments.length;
  averageDisplay.textContent = `average heck yeah: ${average.toFixed()}`;

  if (average % 100 === 60) {
    average += 40;
  }
  if (Math.floor(average / 100) % 100 === 60) {
    average += 4000;
  }
  if (Math.floor(average / 10000) % 100 === 60) {
    average += 400000;
  }

  if (average >= 0 && average < 10) {
    averageDisplay.textContent = `average heck yeah: 00:00:00:0${average}`;
  } else if (average >= 10 && average < 100) {
    averageDisplay.textContent = `average heck yeah: 00:00:00:${average.toString().slice(-1)}${average
      .toString()
      .slice(0, 1)}`;
  } else if (average >= 100 && average < 1000) {
    averageDisplay.textContent = `average heck yeah: 00:00:0${average.toString().slice(0, 1)}:${average
      .toString()
      .slice(1, 2)}${average.toString().slice(2, 3)}`;
  } else if (average >= 1000 && average < 10000) {
    averageDisplay.textContent = `average heck yeah: 00:00:${average.toString().slice(0, 1)}${average
      .toString()
      .slice(1, 2)}:${average.toString().slice(2, 3)}${average.toString().slice(3, 4)}`;
  } else if (average >= 10000 && average < 100000) {
    averageDisplay.textContent = `average heck yeah: 00:0${average.toString().slice(0, 1)}:${average
      .toString()
      .slice(1, 2)}${average.toString().slice(2, 3)}:${average.toString().slice(3, 4)}${average
      .toString()
      .slice(4, 5)}`;
  } else if (average >= 100000 && average < 1000000) {
    averageDisplay.textContent = `average heck yeah: 00:${average.toString().slice(0, 1)}${average
      .toString()
      .slice(1, 2)}:${average.toString().slice(2, 3)}${average.toString().slice(3, 4)}:${average
      .toString()
      .slice(4, 5)}${average.toString().slice(5, 6)}`;
  } else if (average >= 1000000 && average < 10000000) {
    averageDisplay.textContent = `average heck yeah: 0${average.toString().slice(0, 1)}:${average
      .toString()
      .slice(1, 2)}${average.toString().slice(2, 3)}:${average.toString().slice(3, 4)}${average
      .toString()
      .slice(4, 5)}:${average.toString().slice(5, 6)}${average.toString().slice(6, 7)}`;
  } else if (average >= 10000000 && average < 100000000) {
    averageDisplay.textContent = `average heck yeah: ${average.toString().slice(0, 1)}${average
      .toString()
      .slice(1, 2)}:${average.toString().slice(2, 3)}${average.toString().slice(3, 4)}:${average
      .toString()
      .slice(4, 5)}${average.toString().slice(5, 6)}:${average.toString().slice(6, 7)}${average
      .toString()
      .slice(7, 8)}`;
  } else {
    averageDisplay.textContent = "average heck yeah: heck yeah B)";
  }
}
