// ------------------------------------------
// 🌟 JavaScript Notes
// ------------------------------------------

// JavaScript is a programming language used to give instructions.
// You can write code in the browser console or in a code editor (like VS Code).

// To print output in the console:
console.log("Hello World");

// To connect JS with HTML, use the <script> tag in your HTML file:
// Example: <script src="index.js"></script>
// Place it inside the <body> or <head> tag.


// ------------------------------------------
// 🧠 VARIABLES
// ------------------------------------------

// Variables are containers for data.
// Rules for naming variables:
// 1. JS is case-sensitive → fullname and fullName are different.
// 2. Variable names can start with letters, $, or _ (not numbers).
// 3. Reserved words (like `console`) cannot be variable names.

// Example:
let fullNAME = "Aryan Suryavanshi";

// JS is dynamically typed → we don’t declare variable types manually.

// Variable Declaration Methods:
var A = 10;      // Old method — can be redeclared & updated.
let B = 20;      // Modern method — can be updated, not redeclared.
const c = 30;    // Fixed — cannot be redeclared or updated.

// Example: redeclaration & update
var age = 24;
var age = 29;    // ✅ Redeclared (var allows it)

let marks = 80;
// let marks = 90; ❌ Not allowed (let can't be redeclared)
marks = 90;      // ✅ Updated


// ------------------------------------------
// 📊 DATA TYPES
// ------------------------------------------

// Datatype = kind of data a variable can store

// 1️⃣ Primitive Data Types
let num = 5;                   // number
let string = "JavaScript";     // string
let isTrue = true;             // boolean
let big = 1234567890123456n;   // bigint
let nothing = null;            // null (typeof null → "object")
let symbol = Symbol("id");     // symbol
let undef;                     // undefined (no value assigned)

// 2️⃣ Non-Primitive Data Types
// Objects → collection of key-value pairs
const person = {
  name: "Aryan",
  age: 18
};

// Arrays → collection of values
const colors = ["red", "blue", "green"];

// Functions → block of reusable code
function greet() {
  console.log("Welcome to JS!");
}
greet();

// Note: We can update object values even if declared with const
person.name = "A. Suryavanshi";


// ------------------------------------------
// ⚙️ OPERATORS
// ------------------------------------------

// 👉 Arithmetic Operators:
let a1 = 10, b1 = 3;
console.log(a1 + b1);  // Addition
console.log(a1 - b1);  // Subtraction
console.log(a1 * b1);  // Multiplication
console.log(a1 / b1);  // Division
console.log(a1 % b1);  // Modulus (remainder)
console.log(a1 ** 2);  // Exponentiation (power)

// Increment/Decrement
let x = 5;
console.log(x++); // post increment (prints 5, then becomes 6)
console.log(++x); // pre increment (increments first, prints 6)
console.log(x--); // post decrement (prints 5, then becomes 4)
console.log(--x); // pre decrement (decrements first, prints 4)


// 👉 Assignment Operators:
let z = 10;
z += 4;  // z = z + 4
z **= 2; // z = z^2
console.log(z);


// 👉 Comparison Operators:
console.log(2 == "2");   // true  (checks only value)
console.log(2 === "2");  // false (checks value + type)
console.log(2 != "2");   // false
console.log(2 !== "2");  // true
console.log(5 > 3);      // true
console.log(5 >= 5);     // true


// 👉 Logical Operators:
let p = true, q = false;
console.log(p && q); // AND → true if both true
console.log(p || q); // OR → true if any one true
console.log(!p);     // NOT → reverses the value

// Example:
let con1 = 3 > 2;   // true
let con2 = 3 === 3; // true
console.log(con1 && con2); // true
console.log(con1 || con2); // true
console.log(!con1);        // false


// ------------------------------------------
// 🧩 CONDITIONAL STATEMENTS
// ------------------------------------------

// if statement
let ageUser = 18;
if (ageUser >= 18) {
  console.log("You can vote");
}

// if-else statement
let mode = "dark-mode";
let color;
if (mode === "dark-mode") {
  color = "Black";
} else {
  color = "White";
}
console.log(color);

// else-if statement
if (ageUser < 18) {
  console.log("Junior");
} else if (ageUser > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}

// 👉 Ternary Operator
let result = ageUser > 18 ? "Adult" : "Not Adult";
console.log(result);


// ------------------------------------------
// 🪄 POPUP FUNCTIONS
// ------------------------------------------
// Uncomment below to test popups in browser environment (won’t work in VS Code console):
// alert("This is a popup message!");
// prompt("Enter your name:");


// ------------------------------------------
// 💬 COMMENTS
// ------------------------------------------
// Single-line comment: // your comment here
/* Multi-line comment:
   This is used for writing longer explanations.
*/
// MDN --> info for coding.

// ===============================
// JAVASCRIPT – LOOPS & STRINGS (Lecture 3: Apna College)
// ===============================

// 1️⃣ LOOPS – Why & What
// Loops are used to execute a block of code repeatedly until a condition is met. 
// They save you from writing repetitive code manually.

// -------------------------------
// for loop
// Syntax: for (initialization; stoppingCondition; update) { block }
// Example:
for (let i = 1; i <= 5; i++) {
  console.log("Hello World", i);
}
// Explanation:
// - initialization: let i = 1
// - stoppingCondition: i <= 5
// - update: i++
// The loop runs as long as the condition holds true. 

// ✅ Use when you know how many times you want to loop.

// -------------------------------
// ➤ while loop
// Syntax: initialization outside; then while (condition) { block; update; }
// Example:
let j = 1;
while (j <= 5) {
  console.log("While loop count:", j);
  j++;
}
// Explanation:
// - j is initialized before loop.
// - Check condition j <= 5 each time.
// - Update j inside loop so eventually condition fails.

// ✅ Use when you don’t know the exact number of iterations but condition drives loop.

// -------------------------------
// ➤ do…while loop
// Syntax:
let k = 1;
do {
  console.log("Do-While count:", k);
  k++;
} while (k <= 5);
// Explanation: The block executes at least once, then condition checked.

// ✅ Use when you must execute the loop block at least once regardless of condition.

// -------------------------------
// ➤ for-of loop
// Syntax: for (let element of iterable) { block }
// Example:
let str = "ApnaCollege";
for (let ch of str) {
  console.log("Character:", ch);
}
// Explanation: Iterates over characters of string (or elements of array).

// ✅ Use for iterables like arrays or strings when you just want each element.

// -------------------------------
// ➤ for-in loop
// Syntax: for (let key in object) { block }
// Example:
let student = { name: "Aryan", age: 18, branch: "ECE" };
for (let key in student) {
  console.log(key, ":", student[key]);
}
// Explanation: Iterates over the keys (properties) of an object.

// ✅ Use for objects (or sometimes for arrays, though not recommended for arrays generally).

// -------------------------------
// 🔍 Quick loop practise examples:
// Example: Sum of first n natural numbers
let n = 5;
let SUM = 0;
for (let i = 1; i <= n; i++) {
  SUM += i;
}
console.log("Sum from 1 to", n, "=", SUM);

// Example: Print only even numbers up to some limit
for (let x = 0; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log("Even:", x);
  }
}

// Example: Using loops with strings
let myStr = "JavaScript";
for (let char of myStr) {
  if ("aeiouAEIOU".includes(char)) {
    console.log("Vowel:", char);
  }
}

// =====================================
// 2️⃣ STRINGS in JavaScript
// A string is a sequence of characters. Eg: "Hello", 'World', `Template`. 

// ➤ Length & accessing characters
let message = "JavaScript is Fun!";
console.log("Length:", message.length);     // how many chars
console.log("First char:", message[0]);     // J
console.log("Last char:", message[message.length - 1]); // !

// ➤ Template Literals (back-tick syntax)
let user = "Aryan";
let greeting = `Hello ${user}, welcome to JS!`;
console.log(greeting);
// Benefits: easier variable insertion, easier multi-line strings. 

// ➤ Escape characters
console.log("Line1\nLine2");  // new line
console.log("Name:\tAryan");   // tab

// ➤ Important String Methods
let text = "  ApnaCollege  ";
console.log(text.toUpperCase());            // "  APNACOLLEGE  "
console.log(text.toLowerCase());            // "  apnacollege  "
console.log(text.trim());                   // "ApnaCollege" (removes spaces at ends) 

console.log(text.slice(2, 8));              // substring from index 2 upto (but not including) index 8
console.log(text.replace("College", "University"));  // replace part of string
console.log(text.concat(" Rocks!"));        // join with another string
console.log(text.charAt(3));                // char at index 3
console.log(text.indexOf("College"));       // position of substring (if exists)
console.log(text.includes("College"));      // true/false

// ➤ Strings are immutable
// You cannot change a character at an index in a string directly; you create a new string.

// 🔍 String practise example
// Problem: Create a username from full name
let fullName = "Shradha Khapra";
let userName = `@${fullName.replace(" ", "").toLowerCase()}${fullName.length}`;
console.log("Generated username:", userName);

// =====================================
// 🧠 CHECKLIST & NOTES
// – Understand each loop type: for, while, do-while, for-of, for-in.
// – Know when to use each type (iterables vs objects vs known count vs unknown count).
// – Be comfortable writing loop logic: initialization, condition, update.
// – Avoid infinite loops — always ensure the update leads towards condition failing. :contentReference[oaicite:13]{index=13}
// – Understand string basics: creating, accessing, length, indexing.
// – Memorize common string methods: toUpperCase, toLowerCase, trim, slice, replace, concat, charAt, indexOf, includes.
// – Know difference: methods that mutate vs methods that return new string/array (strings are immutable).
// – Practice writing mini-problems (e.g., count vowels in a string, sum numbers via loop, convert strings, etc).

// ✅ Final Tip: Open VS Code, type out these examples, tweak the values & see outputs live. That interactive experimentation will make it stick.

// ===============================
// 🎯 END OF NOTES FOR LOOPS & STRINGS


// ===============================
// JAVASCRIPT ARRAYS – Lecture 4 Notes
// ===============================

// 1️⃣ WHAT IS AN ARRAY?
// An array is a collection data-structure (ordered list) of items.
// Items can be of any type (numbers, strings, objects, even other arrays).

let arr1 = [];            // empty array
let arr2 = [1, 2, 3];     // numeric array
let arr3 = ["apple","banana","cherry"];  // string array
let arrMixed = [1, "two", {three:3}, [4,5]];

// 2️⃣ ARRAY INDICES
// • Arrays are zero-indexed: first element at index 0, next at 1, etc.
// • The “length” property gives count of elements (not highest index).
// • Accessing beyond last index → undefined.

let fruits = ["apple","banana","cherry"];
console.log(fruits[0]);        // "apple"
console.log(fruits[2]);        // "cherry"
console.log(fruits[3]);        // undefined
console.log(fruits.length);    // 3

// 3️⃣ LOOPING OVER ARRAYS
// Several ways to iterate:

// – FOR loop (classic)
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i}: ${fruits[i]}`);
}

// – FOR…OF loop (ES6) – directly gives value
for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// – forEach() method (array method) – callback for each element
fruits.forEach(function(fruit, index){
  console.log(`forEach index ${index}: ${fruit}`);
});
// Or with arrow:
fruits.forEach((fruit, index) => console.log(`=> ${index}: ${fruit}`));

// 4️⃣ PRACTICE QUESTIONS (Loop + Array)
// Eg: Print all elements, sum of numbers, find max/min, etc.
// E.g., count occurrences, filter, etc.

// Example: sum of numeric array
let nums = [10, 20, 30, 40];
let sum = 0;
for (let num of nums) {
  sum += num;
}
console.log("Sum =", sum);

// 5️⃣ ARRAY METHODS
// A variety of built-in methods to operate on arrays. Here are key ones:

// – push(...items): add items to end
fruits.push("date");
console.log(fruits); // ["apple","banana","cherry","date"]

// – pop(): remove last item & return it
let last = fruits.pop();
console.log(last);   // "date"
console.log(fruits); // back to ["apple","banana","cherry"]

// – shift(): remove first item
let first = fruits.shift();
console.log(first);  // "apple"
console.log(fruits); // ["banana","cherry"]

// – unshift(...items): add items at start
fruits.unshift("elderberry");
console.log(fruits); // ["elderberry","banana","cherry"]

// – indexOf(item): find index of item (or -1 if not found)
console.log(fruits.indexOf("banana")); // likely 1
console.log(fruits.indexOf("fig"));    // -1

// – includes(item): boolean if array contains item
console.log(fruits.includes("cherry")); // true
console.log(fruits.includes("apple"));  // false (after shift)

// – slice(start, end): returns shallow copy of portion [start, end)
let part = fruits.slice(1,3);
console.log(part); // e.g., ["banana","cherry"]

// – splice(start, deleteCount, ...itemsToAdd): modifies array in‐place
// Remove & optionally add items
let removed = fruits.splice(1, 1, "blueberry","cantaloupe");
console.log("Removed:", removed);    // ["banana"]
console.log("Now:", fruits);        // ["elderberry","blueberry","cantaloupe","cherry"]

// – concat(...arrays/items): returns new array by joining
let moreFruits = fruits.concat(["dragonfruit", "elderberry"]);
console.log(moreFruits);

// – join(separator): returns string by joining elements
console.log(fruits.join(" | "));     // Something like "elderberry | blueberry | cantaloupe | cherry"

// – reverse(): reverse array in-place
fruits.reverse();
console.log("Reversed:", fruits);

// – sort(): sorts array (by default lexicographically)
let nums2 = [3,1,4,2];
nums2.sort(); 
console.log(nums2); // [1,2,3,4] usually but with strings may differ

// Note: For numeric sort you often need a compare function:
nums2 = [3,1,10,2];
nums2.sort((a,b) => a - b);
console.log(nums2); // [1,2,3,10]

// – map(callback): returns new array by applying callback
let doubled = nums.map(n => n * 2);
console.log(doubled);

// – filter(callback): returns new array of items that pass test
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);

// – reduce(callback, initialValue): reduces array to single value
let total = nums.reduce((acc, cur) => acc + cur, 0);
console.log("Total via reduce:", total);

// 6️⃣ MORE PRACTICE QUESTIONS
// – Remove duplicates from array
let dupArr = [1,2,2,3,4,4,5];
let unique = dupArr.filter((val, idx, self) => self.indexOf(val) === idx);
console.log("Unique:", unique);

// – Find largest/smallest value in array
let mixedNums = [5, 9, 1, 12, 3];
let max = mixedNums[0];
for (let val of mixedNums) {
  if (val > max) max = val;
}
console.log("Max =", max);

// – Merge two arrays and sort
let a = [3,1], b = [4,2];
let merged = a.concat(b).sort((x,y) => x-y);
console.log("Merged sorted:", merged);

// 7️⃣ IMPORTANT NOTES & REMINDERS
// • Arrays are objects under the hood in JS.
// • Array length is *dynamic* – you can add or remove items anytime.
// • Some methods (like splice, push, pop, shift, unshift, reverse, sort) mutate the original array.
// • Other methods (like slice, map, filter, concat, join, reduce) return a new array or value and leave original unchanged.
// • When looping over arrays, watch out for changing array length inside loop (can cause missing elements or infinite loops).
// • Methods like filter/map don’t mutate original array — good for functional-style programming.
// • For performance: avoid modifying array excessively inside large loops; prefer built-in methods where possible.

// ===============================
// ✅ QUICK REVISION CHECKLIST
// [ ] Know how to declare arrays.
// [ ] Understand zero-based indexing and length property.
// [ ] Be comfortable using for, for…of, forEach for iteration.
// [ ] Memorise at least 8 common array methods (push, pop, shift, unshift, slice, splice, concat, join, map, filter, reduce, sort, reverse).
// [ ] Know which methods mutate vs which return new array/value.
// [ ] Practice common questions: sum, max/min, duplicates removal, merging, sorting.
// [ ] Understand difference between treating an array as list vs as stack vs as queue (LIFO vs FIFO).
// [ ] Recognize nested arrays and working with multidimensional arrays.

// ===============================
// 🎯 END NOTES
// This lecture sets you up strongly for working with arrays in JS — a core part of any front-end or back-end JS code. Make sure you try examples in VS Code/live editor yourself—is the best way to solidify. Good luck with your learning journey! 🚀



// ✅ What are Functions?
// Functions are blocks of code that perform specific tasks.
// They help reuse code instead of writing it again and again.

function greet() {
    console.log("Hello from Apna College!");
}
greet(); // Function call

// ✅ Function Definition Syntax
// function keyword → function name → (parameters) → { body }

function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Aryan");

// ✅ Function Declaration vs Execution
function printMessage() {
    console.log("This is a function definition.");
}
printMessage(); // Function executed

// ✅ Parameters and Arguments
function add(a, b) {
    console.log("Sum =", a + b);
}
add(4, 6); // a=4, b=6 → Arguments

// ✅ Return Statement
function multiply(x, y) {
    return x * y;
}
let result = multiply(5, 6);
console.log("Multiplication =", result);

// ✅ Local Variables
function localExample() {
    let localVar = "I exist only inside this function";
    console.log(localVar);
}
localExample();

// ✅ Arrow Functions
// Shorter syntax (introduced in ES6)
const arrowGreet = () => {
    console.log("Hello from Arrow Function!");
};
arrowGreet();

// ✅ Arrow Functions for Small Tasks
const square = n => n * n;
console.log("Square of 7 =", square(7));

// ✅ Functions Performing Calculations
function calcSum(a, b) {
    console.log(`Sum of ${a} and ${b} = ${a + b}`);
}
calcSum(10, 15);

// ✅ Count Occurrence of Vowels
function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowels in 'ApnaCollege' =", countVowels("ApnaCollege"));

// ✅ Functions vs Methods
// Method = Function inside an object
const student = {
    name: "Aryan",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};
student.greet();

// ✅ Functions as Arguments (Callback)
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("😂 Ha Ha Ha!");
}

callTwice(laugh);

// ✅ Higher Order Functions (HOF)
function higherOrder(fn, num) {
    for (let i = 1; i <= num; i++) fn();
}
higherOrder(() => console.log("Apna College Rocks!"), 3);

// ✅ forEach() Example
let nums = [1, 2, 3, 4, 5];
nums.forEach(num => {
    console.log("Square:", num * num);
});

// ✅ map() Method
let marks = [85, 90, 75, 95];
let percent = marks.map(m => m + "%");
console.log(percent);

// ✅ reduce() Method
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr);
console.log("Sum =", sum);

// ✅ Example: Sum of Array using reduce()
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((acc, val) => acc + val);
console.log("Total Sum =", total);

// ✅ Find Largest Element using reduce()
let values = [12, 45, 23, 89, 34];
let largest = values.reduce((max, val) => (val > max ? val : max));
console.log("Largest =", largest);

// ✅ Filter Marks above 90
let studentMarks = [88, 92, 95, 70, 99];
let toppers = studentMarks.filter(m => m > 90);
console.log("90+ Marks =", toppers);

// ✅ Using reduce() for Sum Again
let sumAgain = studentMarks.reduce((a, b) => a + b);
console.log("Total Marks =", sumAgain);

// ✅ Factorial using reduce()
function factorial(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);
    return arr.reduce((acc, val) => acc * val);
}
console.log("Factorial of 5 =", factorial(5));

// ✅ Key Takeaways:
/*
1. Functions make code reusable and modular.
2. Arrow functions are compact and best for small operations.
3. HOFs like forEach, map, filter, and reduce are very powerful.
4. Methods = functions inside objects.
5. Practice by building small function-based utilities.
*/
