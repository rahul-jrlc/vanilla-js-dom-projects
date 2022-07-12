// VARIABLES

const button = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [{
    quote: "Arre nahi, matlab haan wahi",
    person: "Nagesh Shenoy"
}, {
    quote: "Instead of getting married again, I'm going to find a woman I don't like and give her a house.",
    person: "Rod Stewart"
    }, {
    quote: "Behind every great man is a woman rolling her eyes.",
    person: "Jim Carrey"    
    }, {
    quote: "Gaand na fulaao maa chod denge tumhari.",
    person: "Munna Bhaiya"
    }];

button.addEventListener("click", function () {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})