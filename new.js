//Arrow functions are function expressions and do not have the function keyword in it's place there is a fat arrow =>
//create a function that has three parameters a, b,c then find the sum of a * b then return the product of the sum by c

let sum = (a, b, c) => {
    var sums = a + b;
    console.log(sums * c)
}
sum(20, 8, 7);

//OR
let nums = (a, b, c) => (a + b) * c;
console.log(nums(20, 8, 2));



//recap in objects, constructor functions and methods using arrow functions


var Student = {
    name: 'Victorine Amani',
    age: 20,
    colorcode: 'Green',
    grade: 'A',
    greeting: () => {
        console.log(`Hello ${Student.name} and welcome to our school you're of the color code ${Student.colorcode}`)
    }
}
console.log(Student.age);
Student.greeting();

//reassigning the values of the properties 

var student = Object.create(Student);
student.name = "Favour Kimori";
student.age = 11;
student.colorcode = 'Orange';
student.grade = "B";
console.log(Student.age);
Student.greeting();

//constructor functions and prototypes

function Movies(age, drinks) {
    this.age = age,
        this.drinks = drinks,
        this.title = () => {
            if (this.age <= 12 && this.age >= 8) {
                console.log(title = "Batman");
            } else if (this.age >= 13 && this.age <= 17) {
                console.log(title = "Never Have I Ever!");
            } else {
                console.log(title = "scandal");
            }
        }


}


let movie2 = new Movies(13, "Monster");
movie2.title();

Movies.prototype.welcome = (name) => console.log(`Welcome to Nairobi National Theatre ${name} of ${movie2.age} years old`);
movie2.welcome("Favour Kimori");