const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
})

let counter = 0;
next.addEventListener("click", ()=>{
    counter++;
    if(counter == 5){
        counter = 0;
    }
    slider();
    console.log(counter);
});
prev.addEventListener("click", ()=>{
    counter--;
    if(counter == -1){
        counter = 4;
    }
    slider();
});

function slider(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};