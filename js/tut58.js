console.log('This is tutorial 58');

// Set stores unique values
const mySet = new Set(); // Initialize an empty set
// console.log("The set looks like :", mySet);

// Adding value to this set 
mySet.add("this") 
mySet.add("My name") 
mySet.add("My name") 
mySet.add("that") 
mySet.add(35) 
mySet.add(true) 
mySet.add(false) 
mySet.add("Hello") 
// console.log("The set looks like :", mySet);

// Use a constructor to initialize the set
// let mySet2 = new Set([1, 45, "this", false, {name: "Tena", Age: 19, class: 12}])
// console.log("New set", mySet2);

// console.log(mySet.size);    // Get the size of the set
// console.log(mySet.has("Hello"));    // Check whether set has 346 or not

// console.log("Before removal", mySet.has("this"));
mySet.delete("this")
// console.log("After removal", mySet.has("this"));

// Iterating a set
for(let item of mySet){
    // console.log("Item is :", item)
}

// mySet.forEach((item)=>{
//     // console.log('Item is  :', item );
// })
Array.from(mySet);