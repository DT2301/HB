// Lấy các element cần thiết 
const merrywrap = document.getElementById("merrywrap");
const box = merrywrap.getElementsByClassName("giftbox")[0];
const card = document.querySelector(".card");

// Bước mở hộp quà
let step = 1;

// Hàm khởi tạo 
function init() {
  box.addEventListener("click", openBox);
}

// Thêm/xoá class tương ứng với từng bước  
function stepClass(step) {
  merrywrap.className = `merrywrap step-${step}`;
}

// Hàm mở hộp quà
function openBox() {

  // Xoá event listener sau bước 1
  if(step === 1) {
    box.removeEventListener("click", openBox); 
  }

  // Thêm class tương ứng với từng bước
  stepClass(step);

  // Hiện thẻ chúc mừng ở bước 3
  if(step === 3) {
    card.classList.remove("small");
    card.classList.add("click");
  }

  // Tăng bước đếm
  step++;
}

// Khởi chạy 
init();