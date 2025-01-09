var count = 1;

const coolButton = document.getElementById("coolbutton");

coolButton.addEventListener("click", coolFunction);

function coolFunction() {
  count += 1;
  if (count % 2 === 0) {
    coolButton.style.backgroundImage = "url('./assets/button-gif.webp')";
  } else {
    coolButton.style.backgroundImage = null;
  }
}
