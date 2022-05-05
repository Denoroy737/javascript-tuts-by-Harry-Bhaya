console.log("This is tutorial 60");
// Destructuring in JavaScript

let a, b;
[a, b] = [50, 100];
// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log("a is:", a);
// console.log("b is:", b);
// console.log("c is:", c);
// console.log("d is:", d);

// Array Destructuring
({ a, b, c, ...d } = { a: 34, b: 499, c: 399, d: 398, e: 449, f: 489, g: 4942});
// console.log(a,b,c,d)

// let fruits = ["Apple", "Oranges", "Mangoes"]
// [a, b, c] = fruits;
// console.log(a, b, c)

// Object Destructuring
const CV = {
    start: function (){console.log('Started')},
    name: "Rahul",
    Salary: "$8k",
    Age: 20,
    Gender: "Male",
    Skill: "JavaScript"
}
const {start, name, Salary, Age, Gender, Skill} = CV;
console.log(start, name, Salary, Age, Gender, Skill);
start()

