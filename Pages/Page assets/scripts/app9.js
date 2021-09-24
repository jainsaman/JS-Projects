const btn = document.querySelector(".btn");
const quote = document.getElementById('quote');

const quotes = [
    {
        id: 1,
        text: "\"Pani-puri & Pizzas are always the answer.\"\n- Saman",
    },
    {
        id: 2,
        text: "\"Life isn't a matter of milestones, but of moments.\"",
    },
    {
        id: 3,
        text: "\"Don't let your computer screen to be brighter than your future.\"\n- Saman",
    },
    {
        id: 4,
        text: "\"Why fall in love when you can fall asleep.\"",
    },
    {
        id: 5,
        text: "\"Show up in every single moment like you are meant to be there!\"",
    },
    {
        id: 6,
        text: "\"We are all told, we don't stand a chance, and yet we stand.\"",
    },
    {
        id: 7,
        text: "\"Breaking down but still goin on is not a flaw. Giving up is!\"",
    },
    {
        id: 8,
        text: "\"They can only break if you are broken to begin with!\"",
    },
    {
        id: 9,
        text: "\"Once we've weathered a Storm, we become the Storm!\"",
    },
    {
        id: 10,
        text: "\"Enjoy the little things, for one day you may look back and realize they were the big things.\"",
    },
];

function Random(){
    return Math.floor(Math.random() * quotes.length);
};

btn.addEventListener('click', ()=>{
    const random = quotes[Random()];
    console.log(random.text);
    quote.innerText = random.text;
})