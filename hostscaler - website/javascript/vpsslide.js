const rightSlideBtn = document.querySelector("#navbtnleft")
const leftSlideBtn = document.querySelector("#navbtnright")
const cloudItems = document.querySelectorAll(".cloudList-items")

let vps = 1

rightSlideBtn.addEventListener("click",function(){

    if (vps > cloudItems.length -1) return 
    cloudItems.forEach(val => val.classList.add("items__hidden"))
    cloudItems[vps].classList.remove("items__hidden")
    vps++
})
leftSlideBtn.addEventListener("click",function(){
    if(vps < 2) return
    vps--
    cloudItems.forEach(val => val.classList.add("items__hidden"))
    cloudItems[vps-1].classList.remove("items__hidden")
})