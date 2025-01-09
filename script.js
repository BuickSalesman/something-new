let count = 1;
let heckYeahCount = 0;
let prevHeckYeahTime,
  timerInterval,
  elapsedHeckYeahTime = 0;

const coolButton = document.getElementById("cool-button");
const heckYeahs = document.getElementById("heck-yeahs");
const heckYeahTimer = document.getElementById("heck-yeah-time");

coolButton.addEventListener("click", coolFunction);

function coolFunction() {
  count += 1;
  if (count % 2 === 0) {
    heckYeahCount += 1;
    coolButton.style.backgroundImage = "url('./assets/button-gif.webp')";
    heckYeahs.textContent = `heck yeahs: ${heckYeahCount}`;
    startHeckYeahTimer();
  } else {
    coolButton.style.backgroundImage = null;
    stopHeckYeahTimer();
  }
}

function startHeckYeahTimer() {
  prevHeckYeahTime = Date.now();
  timerInterval = setInterval(() => {
    elapsedHeckYeahTime = Date.now() - prevHeckYeahTime;
    heckYeahTimer.textContent = `time heck yeahing: ${elapsedHeckYeahTime}`;
  }, 1);
}

function stopHeckYeahTimer() {
  elapsedHeckYeahTime = heckYeahTimer.textContent;
  clearInterval(timerInterval);
}
