//Scrolling Navbar
var nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    nav.classList.toggle("scrolling", window.scrollY > 0);
});

//GSAP Timeline Animations
let tl = gsap.timeline({ defaults: {
    opacity: 0
}})
tl.from('nav', { y: '-50%', duration: 1 })
    .from('.card', { y: '20%', duration: .5, stagger: .3, delay: 1 }, '-=0.6');

//Footer Contact button
var plus = document.querySelector(".cont");
var box = document.querySelector(".box");
var container = document.querySelector(".container");
plus.addEventListener("click", ()=>{
    box.classList.toggle("boxOpen");
    container.classList.toggle("containerOpen");
});