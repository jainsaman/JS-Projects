const imgHolder = document.querySelectorAll(".imgHolder");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".tie");
const count = document.querySelector(".count");
const playerSel = document.querySelector(".playerSel");
const computerSel = document.querySelector(".computerSel");
var bodyH = document.querySelector("body");
let i , j , score = 0 , k;

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});

function Random(){
    return Math.floor(Math.random() * 3);
};
for(k = 0 ; k<imgHolder.length ; k++){
    imgHolder[k].addEventListener("click", ()=>{
        console.log("select");
    });
}


rock.addEventListener("click", ()=>{
    playerSel.innerHTML = "Rock";
    console.log("rock");
    i = 0
    j = Random();
    console.log(j);
    if (j == 0) {
        computerSel.innerHTML = "Rock";
        win.style.display = "none";
        lose.style.display = "none";
        tie.style.display = "block";
    } else if (j == 1) {
        computerSel.innerHTML = "Paper";
        win.style.display = "none";
        lose.style.display = "block";
        tie.style.display = "none";
        score--;
    } else {
        computerSel.innerHTML = "Scissors";
        win.style.display = "block";
        lose.style.display = "none";
        tie.style.display = "none";
        score++;
    }
    count.innerHTML = score;
    if (score > 0) {
        count.style.color = "var(--green)";
    } else if (score == 0) {
        count.style.color = "var(--yellow)";
    } else {
        count.style.color = "var(--red)";
    }
});