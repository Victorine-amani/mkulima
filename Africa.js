// //conditionals
// //for loop

// let movie = age => {
//     if (age <= 12) {
//         console.log("Shrek");
//     } else if (age >= 13 && age <= 17) {
//         console.log("Never Have I ever");
//     } else {
//         console.log("Scandal")
//     }
// }
// movie(16);


// let nums = item1 => {
//     for (var i = 0; i <= item1.length; i++) {
//         console.log(item1[i] +
//             1);
//     }
// }
// nums([1, 2, 3, 4, 5, 6, 7]);

// //while
// let jina = names => {
//     var name = 0
//     while (name <= names.length) {
//         console.log(`Hello ${names[name]}`);
//         name++
//     }
// }
// jina(["Victorine", "Favour", "Joel", "Hezborn", "Elizabeth"]);

// //do while
// let jinas = names => {
//     var i = 0
//     do {
//         console.log(`Welcome ${names[i]}`);
//         i++
//     }
//     while (i <= names.length);
// }
// jinas(["Brenda", "Gitau", "Wuanita"]);

// //functions
// //IIFE
// (function() {
//     console.log("Hello User")
// })();

// //Anonymous functions

// let x = function(year) {
//     var age = 2021 - year
//     console.log(age);
// }(2001);

// //Named functions


// function y() {
//     console.log("This is a named function");
// }
// y();

// //Arrow functions

// let b = () => {
//     console.log("This is an arrow function")
// }
// b();


// ///variable scopes

// //let a = "Hello"

// let greet = name => {

//     console.log(a + " " + name);
// }
// greet("Victorine");


// let globe = () => {
//     a = "bonjour!";
// }
// globe();

// console.log(a);
// let c = 30

// let globe2 = () => {
//     let b = 70;
//     console.log(c + b);
// }
// globe2();
// console.log(c + b);

// let ifs = (weight) => {
//     if (weight > 69) {
//         let b = "go to the gym"
//         console.log(b);
//     } else {
//         console.log("you're good")
//     }
// }
// ifs(22);

// let parent = () => {
//     let x = "Welcome"
//     let child = () => {
//         let y = "student"
//         console.log(x + " " + y);
//     }
//     child();

// }
// parent();