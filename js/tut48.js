console.log("This is tutorial 48");
// (RECALL) Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols

// const regex = /^Tena/i

// Character Sets - We use []
let regex = /Te[a-z]a/ // can be any character from a to z
regex = /Te[nbc]a/ // can be any from n, c and b 
regex = /Te[^ifg]a/; // cannot be any of n, f or g
regex = /T[^aty]n[yYa]/; // cannot be any of a, t or y + can be  Y, a or y
regex = /T[a-zAZ]n[yua 0-9][0-9]/; // we can have as many character sets as we want // you have to add integer in str

// Quantifiers - We use {}
regex = /Te{2}na/; // r can occur exactly 2 times
regex = /Te{0-4}na/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(Tee){2}([0-9])na{3}/

const str = "Teena Dev";
// str = "Tendda bhai"
// str = "Teddna bhai";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.exec(str)) {
    console.log(`The string (${str}) matches the expression ${regex.source}`)
}
else{
    console.log(`The string (${str}) does not match the expression ${regex.source}`);
}