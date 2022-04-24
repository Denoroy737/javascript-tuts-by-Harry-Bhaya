console.log("Hey! I Founed the tut41.js")

// ARROW FUNCTIONS
// const Name = "Tena"
// Creating a regular function
// const Tena = function(){
//     console.log("Hello world")
// }
// Tena()

// Converting it to an arrow function
const Tena = ()=>{
    console.log("hello world")
}
Tena();

// function returning something
// const Greeting = ()=>{
    
//     return console.log("Good Night " +  Name)
// }

// One liners do not require braces/return
// const Greeting =  ()=> "Good Night";

// one line will automatically return
// const Greeting =  ()=> ({name: "Tena"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  {("Good Morning " + name + ending)};
console.log(greet('Harry',))