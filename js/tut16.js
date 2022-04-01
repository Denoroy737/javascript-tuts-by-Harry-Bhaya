console.log("This is tut 16");
let element = document.createElement("li");
let text = document.createTextNode("I am a text node");
element.appendChild(text);

// Add a class name to the li element
element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
element.innerHTML = "<b>Hello this is craated by Kena</b>";
// element.innerText = '<b>Hello this is craated by Kena</b>'
 
let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is a created by elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById("myul");
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute("href");
elem2.removeAttribute("id");
elem2.setAttribute("title", "myelem2title");
console.log(elem2, pr);

// Qustions and Answer
// let removediv = document.getElementById("hello").remove()
// const div =  document.querySelector("#helo")
// const h2 = document.createElement('h2')
// h2.innerHTML = '<a href="https://www.codewithharry.com">Go to CodeWithHarry</a>'
// div.appendChild(h2)
// console.log(removediv)