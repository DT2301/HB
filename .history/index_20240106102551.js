function reveal() {
  console.log("hello");
}
window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);

    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();
      return true;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }
  init();
};

var cardActive = document.querySelector(".card");
var giftbox = document.querySelector("giftbox");

function ActiveGiftBox() {
  if (OpenBox()) {
    cardActive.classList.remove("small");
    cardActive.classList.toggle("click");
  }
}
