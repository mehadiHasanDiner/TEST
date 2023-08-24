const displayedNumber = document.getElementById("display-number");
let numberToShow = parseInt(displayedNumber.innerText);

// const operatorFunction = () => {
//   const intervalId = setInterval(() => {
//     displayedNumber.innerText = numberToShow++;
//   }, 1000);
//   stopCount(intervalId);
// };

const startCount = () => {
  const intervalId = setInterval(() => {
    displayedNumber.innerText = numberToShow++;
  }, 1000);
  stopCount(intervalId);
};

const stopCount = (id) => {
  clearInterval(id);
};

startCount();
