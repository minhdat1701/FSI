var theImages = [
  {
    src: "https://i.pinimg.com/236x/6a/75/fe/6a75fefcb69f783d8640ed1d9cfb8df0.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/236x/93/36/b2/9336b21c881c09306895d737cc291606.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/236x/e7/b1/52/e7b1524fe26dff2b2de52426e64cd4d7.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/236x/f2/f3/91/f2f391c2db8f884fead6a1e41794e62e.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/236x/fb/0e/ae/fb0eae0dccf81708e110cf403fd4cde6.jpg",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.pinimg.com/236x/2a/18/3d/2a183dc26ae47de6caaf55e6c9419f18.jpg",
    width: "300",
    height: "300",
  },
];


const generateBtn = document.querySelector('button');
const imgGroup = document.querySelector('.img-group');

// Hàm lấy ngẫu nhiên một phần tử từ mảng
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Hàm lấy ngẫu nhiên 3 ảnh từ mảng ảnh, không trùng lặp
function getRandomImages() {
    const copyArray = theImages.slice(); 
    const randomImages = [];

    while (randomImages.length < 3 && copyArray.length > 0) {
        const randomImage = getRandom(copyArray);
        copyArray.splice(copyArray.indexOf(randomImage), 1); 
        randomImages.push(randomImage);
    }
    return randomImages;
}

// Hàm hiển thị 3 ảnh lên màn hình
function displayRandomImages() {
    const randomImages = getRandomImages();
    imgGroup.innerHTML = '';
    randomImages.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.width = image.width;
        imgElement.height = image.height;
        imgGroup.appendChild(imgElement);
    });
}

generateBtn.addEventListener('click', function () {
    displayRandomImages();
});

displayRandomImages();
