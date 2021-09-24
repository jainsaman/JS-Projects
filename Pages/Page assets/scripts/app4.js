const reviews = [
    {
        id: 1,
        name: "Adam Burns",
        job: "UX DESIGNER",
        img: "./Page assets/images/review1.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas praesentium repellendus suscipit impedit quas rem sit voluptate iusto veniam?",
    },
    {
        id: 2,
        name: "Alvin Junior",
        job: "APP DEVELOPER",
        img: "./Page assets/images/review2.jpg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laboriosam nisi voluptatem dignissimos iste quae quasi earum quas.",
    },
    {
        id: 3,
        name: "John Smith",
        job: "WEB DEVELOPER",
        img: "./Page assets/images/review3.jpg",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime fugiat quo laboriosam praesentium eum optio?",
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentItem = 0;

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.info;
}

nextBtn.addEventListener('click', ()=>{
    currentItem++;
    if (currentItem > 2) {
        currentItem = 0;
    };
    showPerson(currentItem);
})

prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if (currentItem < 0) {
        currentItem = 2;
    };
    showPerson(currentItem);
})