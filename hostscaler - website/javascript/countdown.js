const hours = document.querySelector(".hours");
const days = document.querySelector(".days");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
// const hamburgerMenu = document.querySelectorAll(".hamburger__menu");
// const hiddenNav = document.querySelector(".hiddennavs");

//countdown starting accept argument the end date
const countdownTimer = (date) => {
  let endDate = new Date(`${date}`).getTime();
  let now = new Date().getTime();
  let remainingTime = endDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let daysLeft = Math.trunc(remainingTime / day);
  let hoursLeft = Math.trunc((remainingTime % day) / hour);
  let minutesLeft = Math.trunc((remainingTime % hour) / minute);
  let secondsLeft = Math.trunc((remainingTime % minute) / second);
  return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
};

// setting the timer to the dom
const timerSet = (date = "jul 18, 2022 00:00:00") => {
  //returns a timer object
  const timerObject = countdownTimer(date);
  days.textContent = timerObject.daysLeft;
  hours.textContent = timerObject.hoursLeft;
  minutes.textContent = timerObject.minutesLeft;
  seconds.textContent = timerObject.secondsLeft;
};

const stopTimer = setInterval(() => timerSet(), 1000);
console.log(days);