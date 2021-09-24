const generate = document.querySelector(".btn");
const loremText = document.querySelector(".loremText");

var x = document.querySelector(".number");
var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});

//AJAX XML request

var xhr = new XMLHttpRequest();
generate.addEventListener("click", ()=>{
    var link;

    function linkUpdate(number){
        link = "https://loripsum.net/api/"+number;
        console.log(link);
    }

    console.log(x.value);
    linkUpdate(x.value);

    xhr.open('GET', link);
    xhr.onload = function() {
        if (this.status === 200) {
            document.querySelector(".loremText").innerHTML = this.response;
            loremText.classList.add("loremTextVisible")
        } else {
            console.log('Where did all the dinosaurs go?');
        }
    };
    xhr.send();
})