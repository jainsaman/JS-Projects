const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName("button"));
const error = document.querySelector(".error");

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                error.classList.remove("show");
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0,-1);
                error.classList.remove("show");
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = '';
                    error.classList.toggle("show");
                }
                break;
            default:
                display.innerText += e.target.innerText;
                error.classList.remove("show");
        }
    });
});