console.log("he hee heee now we are in tut20 it's Time to Spread Corona Virus");
let impArray = ["dark", "pyaz", "behind"];

// Add a key-value pair inside local Storage
localStorage.setItem("Name", "Kena");
localStorage.setItem("Role", "Backend-Dev");
localStorage.setItem("Qazie", JSON.stringify(impArray));

// Clears the entire local Storage
// localStorage.clear()

// Clear a particular key-value pair
// localStorage.removeItem('Name')

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)

sessionStorage.setItem('sessionName', 'Kena')
sessionStorage.setItem('sessionRole', 'Blockchain')
sessionStorage.setItem('sessionQazie', JSON.stringify(impArray))
