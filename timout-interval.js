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

// const resetCount = () => {
//   displayedNumber.innerText = parseInt(0);
// };
