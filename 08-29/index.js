const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  const sentence = form.elements.sentence.value;
  const count = parseInt(form.elements.count.value);
  const numOne = parseInt(form.elements.numOne.value);
  const numTwo = parseInt(form.elements.numTwo.value);
  capitalize(sentence);
  if (!isNaN(count)) rotateString(count);
  if (!isNaN(numOne) && !isNaN(numTwo)) multiplyAndDivide(numOne, numTwo);
  e.preventDefault();
});

function rotateString(count) {
  let str = "codingmart";
  let id = setInterval(() => {
    str = str.slice(str.length - 1) + str.slice(0, str.length - 1);
    console.log(str);
    count--;
    if (count == 0) clearInterval(id);
  }, 1000);
}

function multiplyAndDivide(numOne, numTwo) {
  console.log("Multiplication: " + numOne * numTwo);
  console.log("Division: " + numOne / numTwo);
}

function capitalize(sentence) {
  const str = sentence !== "" ? sentence : "";
  const words = str.split(" ");
  for (let word of words) {
    word = word.slice(0, 1).toUpperCase() + word.slice(1);
    console.log(word);
  }
}

function currentTime(isRailwayFormat = false) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = new Date();

  if (isRailwayFormat) {
    console.log(
      days[date.getDay() - 1] +
        " | " +
        date.getHours() +
        " : " +
        date.getMinutes() +
        " : " +
        date.getSeconds()
    );
  } else {
    console.log(
      days[date.getDay() - 1] + " | " + date.getHours() > 12
        ? date.getHours() - 12 + " PM "
        : date.getHours() +
            " AM " +
            " : " +
            date.getMinutes() +
            " : " +
            date.getSeconds()
    );
  }
  //Tuesday | 10 PM : 30 : 38
}

currentTime();

function timeUntilNextChristmas() {
  const current = new Date();
  const nextYear =
    current.getMonth() == 11 && current.getDate() > 25
      ? current.getFullYear() + 1
      : current.getFullYear();
  const nextXmas = new Date(nextYear, 11, 25);
  const diff = nextXmas - current;

  // milli seconds per unit of time
  const days = 24 * 60 * 60 * 1000,
    hours = 3600 * 1000,
    minutes = 60 * 1000,
    seconds = 1000;
  const daysLeft = Math.floor(diff / days);
  const hoursLeft = Math.floor((diff - daysLeft * days) / hours);
  const minutesLeft = Math.floor(
    (diff - daysLeft * days - hoursLeft * hours) / minutes
  );
  const secondsLeft = Math.floor(
    (diff - daysLeft * days - hoursLeft * hours - minutesLeft * minutes) /
      seconds
  );
  console.log(
    `Time until next christmas ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`
  );
}

timeUntilNextChristmas();
