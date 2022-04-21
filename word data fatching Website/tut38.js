// You have pretend to use a word api which will contain an object and you hve to print definition from all the results of that word api.
// YOu have to take input from an input tag.
// You have to print it in the dom
// If you are using bootstrap then its a plus

let btn = document.getElementById("btn");
let textinput = document.getElementById("text-input").value;
// console.log(textinput);  

// Pretend This response is coming from the sever
const words = [
  { word: "hello", definition: "hello or an equivalent greeting." },
  {
    word: "example", definition: "Something that is representative of all such things in a group."
  }
];
console.log(`hell ${words[0].word}`)

// taking a input from the input tag
function userinput() {
  let textinput = document.getElementById("text-input").value;
  document.getElementById("demo").innerHTML = textinput
  if (textinput == words.word){
    console.log(words.word)
  }
  else{
    console.log("Hello word")
  }

  
    
  
  // console.log(textinput)
  

}