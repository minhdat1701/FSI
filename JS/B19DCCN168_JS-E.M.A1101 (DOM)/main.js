const images = ["img1.jpg", "img2.png", "img3.png"];
let index = 0;

// Add your code here
// Task 1
let imageContainer = document.querySelector(".img-container");

let backBtn = document.querySelector(".back");

let nextBtn = document.querySelector(".next");

backBtn.addEventListener("click", function () {
  // Add your code here
  // Task 3.1
  index--;
  if (index < 0) {
    index = 0;
  }
  renderImage(index);
});

nextBtn.addEventListener("click", function () {
  // Add your code here
  // Task 3.2
  index++;
  if (index >= images.length) {
    index = images.length - 1;
  }
  renderImage(index);
});

// Add your code here
// Task 2
function renderImage(index) {
  imageContainer.innerHTML =
    '<img src="./images/' + images[index] + '" alt="" class="img-container">';
}
renderImage(0);
