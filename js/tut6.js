console.log("hello World");
const name = "Kena";
const greeting = `Good Morning ${name} `;
// console.log(greeting)
// console.log(name + greeting)

let Html;
Html =
  "<h1> Hello world My name is a kena</h1>" +
  "<p> Hey! nice to meet you Kena</p>";
// console.log(Html);

Html = Html.concat("kena ", "hello");
// console.log(Html);
// console.log(Html.length);
// console.log(Html.toLowerCase());
// console.log(Html.toUpperCase());

// console.log(Html[1]);
// console.log(Html.indexOf("<"));
// console.log(Html.lastIndexOf("<"));
// console.log(Html.charAt(5));
// console.log(Html.endsWith("fdsah"));
// console.log(Html.includes("hello"));
// console.log(Html.substring(0,9));
// console.log(Html.slice(0,9));
// console.log(Html.split('>'));
// console.log(Html.replace('kena', 'Rohan'));

let fruit1 = 'Orange\''
let fruit2 = 'appple'
let myhtml = `Hello ${name}
<h1> This is "My" GirlFriend </h1>
<p> You Like ${fruit2} and fuck you </p>`

document.body.innerHTML = myhtml