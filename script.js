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
  } else {
    coolButton.style.backgroundImage = null;
  }
}
