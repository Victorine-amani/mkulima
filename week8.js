//destructuring of Arrays and objects
//destructuring in Arrays
let nameArrray = ["Victorine", "Amani", "Favour", "Kimori"];

//destructuring
let [a, b, c, d] = nameArrray;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let compoundArray = ["Victorine Amani", "Joel John", "favour KImori"];


let [firstName, lastname] = "Victorine Amani".split(' ');
console.log(firstName);
console.log(lastname);


//default values
let valueArray = [7, 6, 8, 9];

let [e = 1, f = 2, g = 3, h = 4, i = 5, j = 6] = valueArray
console.log(e);
console.log(f);
console.log(g);
console.log(h);


//Destructuring in objects

const student = {
    name: 'Elizabeth',
    age: 38,
    gender: 'Female'
}

let { name, age, gender } = student;
console.log(name);
console.log(age);
console.log(gender);



//calling all properties of the objects

let person = {
    name: 'Hezborn',
    age: 42,
    gender: 'Male'
}
let { name, ...rest } = person;
console.log(rest.age);
console.log(rest.gender);
console.log(name);