console.log("Hey we got the page");
let regex = /Kena/;
// regex = /^Kena/; // ^ means expression will match if string starts with
// regex = /Kena$/; // $ at the end of the string means "string ends with"
// regex = /K.na/; // matches any one character
// regex = /K*ena/; // matches any 0 or more charactersh
// regex = /e?Kena/; // ? after character means that character is optional

let str = "Kena means codewith";

let result = regex.exec(str);
console.log("The result from exec is ".result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
