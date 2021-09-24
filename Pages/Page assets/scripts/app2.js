const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const main = document.getElementById('main');
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});
function Random(){
    return Math.floor(Math.random() * hexCode.length);
}

btn.addEventListener("click", ()=>{
    let hexColor = "#";
    for(let i=0 ; i<6 ; i++){
        hexColor += hexCode[Random()];
    };
    console.log(hexColor);
    color.textContent = hexColor;
    main.style.backgroundColor = hexColor;
});