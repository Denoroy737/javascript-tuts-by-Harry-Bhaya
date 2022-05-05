console.log("Welcome to tut57.js");
// Maps in JavaScript: We can use any type of key or value
const mymap = new Map();
const key1 = "str",
  key2 = {},
  key3 = function () {};

// Setting map values
mymap.set(key1, "This is a string");
mymap.set(key2, "This is a blank obj");
mymap.set(key3, "This is a Empty function");
// console.log(mymap);

// Getting the values from a Map
let value1 = mymap.get(key1);
// console.log(value1);

// Get the size of the map
// console.log(mymap.size);

// You can loop using for..of to get keys and values
for(let [key, value] of mymap){
    // console.log(key, value);
}

console.log("Start From here");

// Get only keys
for (let key of mymap.keys()){
    // console.log("key is", key);
}

// Get only value
for (let value of mymap.values()){
    // console.log("value is", value);
}

// You can loop through a map using for each loop
mymap.forEach((value, key) => {
    // console.log("key is", key);
    // console.log("value is", value);
});

// Converting map to an array
let myArray = Array.from(mymap)
console.log('Map to myArray array is ', myArray);

// Converting map keys to an array
let mykeysArray = Array.from(mymap.keys())
console.log('Map to keys array is ', mykeysArray);

// Converting map value to an array
let myvaluesArray = Array.from(mymap.values())
console.log('Map to value array is ', myvaluesArray);