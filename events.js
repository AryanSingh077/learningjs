//ex1:

const btn = document.querySelector("#btn")
const msg = document.querySelector("#msg")
const name = document.querySelector("#name")
const out = document.querySelector("#out")


// btn.addEventListener("click", () => {
//     msg.textContent = "Button clicked"
// });

//ex2:

btn.addEventListener("click", () => {
    msg.textContent = "Button clicked";
    document.body.style.backgroundColor = "grey";
});

//ex3:

name.addEventListener