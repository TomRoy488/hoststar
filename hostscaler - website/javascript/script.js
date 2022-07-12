// const hours = document.querySelector(".hours");
// const days = document.querySelector(".days");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");
const hamburgerMenu = document.querySelectorAll(".hamburger__menu");
const hiddenNav = document.querySelector(".hiddennavs");
const navMenuhidden = document.querySelector(".nav__menu--hidden")

hamburgerMenu.forEach((val) => {
  val.addEventListener("click", function () {
    // hiddenNav.classList.toggle("hidden");
    navMenuhidden.classList.toggle("x")
    hiddenNav.classList.toggle("navsexpand");
  });
});



//slidr event
// sliderBtn.addEventListener("click",function(){
//     console.log(cardHolder);
// })