const balloonContainer = document.getElementById("balloon-container");
var cardActive = document.querySelector(".card");
var giftbox = document.querySelector("giftbox");


  function random(num) {
    return Math.floor(Math.random() * num);
  }
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
  }
  
  function createBalloons(num) {
    for (var i = num; i > 0; i--) {
      var balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = getRandomStyles();
      balloonContainer.append(balloon);
    }
  }
  
  function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
      balloonContainer.remove();
    }, 2);
  }
  
  window.addEventListener("load", () => {
    createBalloons(10);
    console.log("balloon")
  });

  window.addEventListener("load", () => {
    removeBalloons();
  });
}

function reveal() {
  console.log("hello");


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
    if (step === 2) {
      createBalloons(10);

    }
    stepClass(step);
    if (step === 3) {
     
      cardActive.classList.remove("small");
      cardActive.classList.toggle("click");
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
