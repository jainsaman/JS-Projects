var btn = document.getElementsByClassName("btn");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
const cards = document.querySelectorAll(".card");
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});

btn1.addEventListener('click', ()=>{
    for(let j=0 ; j<5 ; j++){
        btn[j].classList.remove("active");
    };
    btn1.classList.add("active");

    for(let i=0 ; i<13 ; i++){
        cards[i].classList.add("all");
    };
    for(let k=0 ; k<13 ; k++){
        cards[k].classList.remove("india");
        cards[k].classList.remove("chin");
        cards[k].classList.remove("ital");
        cards[k].classList.remove("drink");
    };
});

btn2.addEventListener('click', ()=>{
    for(let j=0 ; j<5 ; j++){
        btn[j].classList.remove("active");
    };
    btn2.classList.add("active");

    for(let i=0 ; i<4 ; i++){
        cards[i].classList.add("india");
    };
    for(let k=0 ; k<13 ; k++){
        cards[k].classList.remove("all");
        cards[k].classList.remove("chin");
        cards[k].classList.remove("ital");
        cards[k].classList.remove("drink");
    };
});

btn3.addEventListener('click', ()=>{
    for(let j=0 ; j<5 ; j++){
        btn[j].classList.remove("active");
    };
    btn3.classList.add("active");

    for(let i=4 ; i<8 ; i++){
        cards[i].classList.add("chin");
    };
    for(let k=0 ; k<13 ; k++){
        cards[k].classList.remove("all");
        cards[k].classList.remove("india");
        cards[k].classList.remove("ital");
        cards[k].classList.remove("drink");
    };
});

btn4.addEventListener('click', ()=>{
    for(let j=0 ; j<5 ; j++){
        btn[j].classList.remove("active");
    };
    btn4.classList.add("active");

    for(let i=8 ; i<11 ; i++){
        cards[i].classList.add("ital");
    };
    for(let k=0 ; k<13 ; k++){
        cards[k].classList.remove("all");
        cards[k].classList.remove("india");
        cards[k].classList.remove("chin");
        cards[k].classList.remove("drink");
    };
});

btn5.addEventListener('click', ()=>{
    for(let j=0 ; j<5 ; j++){
        btn[j].classList.remove("active");
    };
    btn5.classList.add("active");

    for(let i=11 ; i<13 ; i++){
        cards[i].classList.add("drink");
    };
    for(let k=0 ; k<13 ; k++){
        cards[k].classList.remove("all");
        cards[k].classList.remove("india");
        cards[k].classList.remove("ital");
        cards[k].classList.remove("chin");
    };
});