const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("button");
const color = document.querySelector(".color")

button.addEventListener("click", function () {
    // GET RANDOM NUMBER BETWEEN O AND 3
    const randomNUmber = 2;
    document.body.style.backgroundColor = colors[randomNUmber];
    color.textContent = colors[randomNUmber];
})