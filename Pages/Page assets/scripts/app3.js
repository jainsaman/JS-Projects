const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navContent");

burger.addEventListener("click",()=>{
    console.log("Hello");
    burger.classList.toggle("open");
    navbar.classList.toggle("navOpen");
});

var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});