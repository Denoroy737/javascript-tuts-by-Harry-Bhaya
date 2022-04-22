// You have pretend to use a word api which will contain an object and you hve to print definition from all the results of that word api.
// YOu have to take input from an input tag.
// You have to print it in the dom
// If you are using bootstrap then its a plus
let btn = document.getElementById('btn');
btn.addEventListener('click', userinput)


function userinput() {
  let input_text = document.getElementById("text-input").value;
  console.log('You have clicked the pop handler');

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open('GET', 'data.json', true);


  var jsonObj = {"word":`${input_text}`};
Object.keys(jsonObj);  // returns ["person", "age"]
console.log(jsonObj)

// What to do when response is ready
xhr.onload = function () {
  if(this.status === 200){
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById('list');
      str = "";
      for (key in obj)
      {
          str += `<li>${obj[key].definition} </li>`;
      }
      list.innerHTML = str;
      console.log(obj)
  }
  else{
      console.log("Some error occured")
  }
}

// send the request
xhr.send();
console.log("We are done fetching employees!");

}