// //ex1:

// const btn = document.querySelector("#btn")
// const msg = document.querySelector("#msg")
// const name1 = document.querySelector("#name")
// const out = document.querySelector("#out")


// // btn.addEventListener("click", () => {
// //     msg.textContent = "Button clicked"
// // });

// //ex2:

// btn.addEventListener("click", () => {
//     msg.textContent = "Button clicked";
//     document.body.style.backgroundColor = "grey";
// });

// //ex3:

// name1.addEventListener("input", () => {
//     out.textContent = name1.value;
// })

//ex4:

// const btn = document.querySelector("toggle");
// let isOn = true;

// btn.addEventListener("click", () => {
//   btn.textContent = isOn ? "OFF" : "ON";
//   isOn = !isOn;
// });

// //ex5:

// const btn2 = document.querySelector("#btn2");
// const res = document.querySelector("#res");

// btn2.addEventListener("click", () => {
//     res.textContent = "count";
// });

// ex6:

// document.addEventListener("keyup", (e) => {
//     console.log("key pressed: ", e.key);
    
// })
// document.addEventListener("keydown", (e) => {
//   console.log("Key pressed:", e.key);
// });


// // ex7:

// let par = document.querySelector("#par");
// let chi = document.querySelector("#chi");

// par.addEventListener("click", () => {
//     console.log("parent");
    
// })

// // ex8:

// chi.addEventListener("click", () => {
//     console.log("child");
// })
// chi.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("only child");
// })

// // ex9:

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.style.color = "red";
//   }
// });

// // ex10:

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form prevented");
// });

// ex11:

// add.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "Item";
//   items.appendChild(li);
// });

// items.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

// const box = document.getElementById("box");

// box.addEventListener("mouseenter", () => box.style.background = "green");
// box.addEventListener("mouseleave", () => box.style.background = "red");

// let isScrolling = false;

// window.addEventListener("scroll", () => {
//   if (!isScrolling) {
//     console.log("Scrolling");
//     isScrolling = true;
//     setTimeout(() => isScrolling = false, 500);
//   }
// });
