var nav = document.querySelector(".header");
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    nav.classList.toggle("scrolling", window.scrollY > 0);
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});