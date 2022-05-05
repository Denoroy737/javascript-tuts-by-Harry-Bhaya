console.log("This is tutorial 56 on for-in and for-of loops");
let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

// ============= For in loop =============

// Traditional for loop:
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}

// 1. ITERATING AN OBJECT
let obj = {
    name: "tena",
    language: "JavaScript",
    skills: "NextJs"
}
console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
    for (let index = 0; index < Object.keys(obj).length; index++) {
        const element = Object.keys(obj)[index];
        console.log(element);
    }

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
// for (const char in myString) {
    // console.log(myString[char]);
// }

// Useing traditional for loop to iterate through the same string
// console.log("================= Start from here =================")
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(myString[index]);

// }

// ================= For of Loop =================
console.log("***************** For of loop starts here *****************")
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}
for(let name of myString){
    console.log(name);
}


