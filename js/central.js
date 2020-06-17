const blockAnim = document.querySelector("#anim");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");
const icon4 = document.querySelector("#icon4");

blockAnim.addEventListener('mouseover', function(){
    icon1.classList.add("icon1_hover");
    icon2.classList.add("icon2_hover");
    icon3.classList.add("icon3_hover");
    icon4.classList.add("icon4_hover");
})

blockAnim.addEventListener('mouseout', function(){
    icon1.classList.remove("icon1_hover");
    icon2.classList.remove("icon2_hover");
    icon3.classList.remove("icon3_hover");
    icon4.classList.remove("icon4_hover");
})