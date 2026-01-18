// let h1a = document.querySelector("#h1a");
// let content = document.getElementsByClassName("text");
// let contents = document.getElementsByTagName("p");

// console.log(h1a);
// console.log(content[0]);
// console.log(content[1]);

// function changeText() {
//   document.getElementById("msg").innerText = "Welcome to DOM";
// }


// // for id we use
// const id = document.getElementById("id");

// // for class we use
// const content = document.getElementsByClassName("class");

// // for tags we use 
// const ele = document.getElementsByTagName("div");

// these are old methods, we will use them only when its necessary;
// we will use querySelector and querySelectorAll for our upcoming js codes;
/*we use querySelector because its replaces the use of the old methods and its easy to use, 
we can change the css using querySelector, and its better for real projects */

// // for id
// const id = document.querySelector("#id");

// // for class
// const content = document.querySelector(".class");

// // for tags
// const ele = document.querySelector("div");


/* properties of dom*/

// tag element, return tags for element nodes
// console.log(id.tagName);
// console.log(content.textContent);
// console.log(ele.innerText);
// console.log(id.innerHTML);

// const div = document.querySelector("div");
// div.setAttribute("id", "B");

// const content = document.querySelector("#box");

// let para = document.createElement("p");
// para.textContent = "Hooga Booga elite";
// content.append(para);

// // Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

// const head = document.querySelector("h2");
// head.append(" form Apna College students");

// // Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

// const box = document.querySelectorAll(".content");
// box[0].textContent = "Im";
// box[1].textContent = "a";
// box[2].textContent = "God";

// // Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white.
// // Insert the button as the first element inside the body tag.

// const whole = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// whole.prepend(btn);

// // Qs. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element.
// // Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.

// const display = document.querySelector(".story");
// display.className = "changed";

// Events...

// this is the old method...

// button.onclick = function () {
//   console.log("Clicked");
// };

// the new one is...

// const btn1 = document.querySelector(".btn1");
// const child = document.querySelector("#child");
// const parent = document.querySelector("#parent");


// btn1.addEventListener("click",() => {
//     console.log("button clicked!!");
// });
// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Child only");
// });


// parent.addEventListener("click", () => console.log("Parent"));
// child.addEventListener("click", () => console.log("Child"));
