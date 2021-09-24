let count = 0;
const counter = document.querySelector(".counter");
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const minus = document.getElementById('minus');
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});
counter.innerHTML = count;

plus.addEventListener('click', ()=>{
    count++;
    counter.innerHTML = count;
})

minus.addEventListener('click', ()=>{
    count--;
    if(count < 0){
        count = 0;
    }
    counter.innerHTML = count;
})

reset.addEventListener('click', ()=>{
    count = 0;
    counter.innerHTML = count;
})