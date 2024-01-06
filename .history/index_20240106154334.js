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

  // Bước 1: Thêm sự kiện click
  if(step === 1) {
    box.addEventListener("click", openBox);

  // Bước 2: Xóa sự kiện click, mở nắp hộp
  } else if(step === 2) {
    box.removeEventListener("click", openBox);
    
    // Thêm các animation mở nắp hộp ở đây

  // Bước 3, 4: Ẩn hộp quà đi 
  } else {
    box.style.opacity = 0; 
  }

  step++;
}

// Khởi chạy 
init(); 