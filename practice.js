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

const content = document.querySelector("#box");

let para = document.createElement("p");
para.textContent = "Hooga Booga elite";
content.append(para);