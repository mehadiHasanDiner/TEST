// stopwatch start
const displayedNumber = document.getElementById("display-number");
let numberToShow = parseInt(displayedNumber.innerText);

const startCount = () => {
  const intervalId = setInterval(() => {
    displayedNumber.innerText = numberToShow++;
  }, 1000);
  document.getElementById("stop-count").addEventListener("click", () => {
    clearInterval(intervalId);
  });

  document.getElementById("rest-count").addEventListener("click", () => {
    clearInterval(intervalId);
    displayedNumber.innerText = 0;
  });
};

// stopwatch end

// slider start\
const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
];

let imgIndex = 0;
const imgElement = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  // console.log(imgUrl);
  imgElement.setAttribute("src", imgUrl);
  ++imgIndex;
}, 1000);
