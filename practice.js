const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
let isWhite = true;

btn.addEventListener("click", () => {
    output.textContent = "Button clicked";
    document.body.style.backgroundColor = isWhite ? "black" : "white";
    isWhite = !isWhite;
})