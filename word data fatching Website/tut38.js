// You have pretend to use a word api which will contain an object and you hve to print definition from all the results of that word api.
// YOu have to take input from an input tag.
// You have to print it in the dom
// If you are using bootstrap then its a plus
let input_text = document.getElementById("text-input");
let btn = document.getElementById('btn');
btn.addEventListener('click', userinput)


function userinput() {
  console.log('You have clicked the btn');

  // if (textinput === ) {
    
  // }
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  
  // Open the object
  xhr.open('GET', 'data.json', true);
  xhr.getResponseHeader('Content-type', 'application/json');

  // what to do when response is ready
  function hello() {
    if (this.status === 200) {
      // console.log(this.responseText);
      let obj = JSON.parse(this.responseText);
      for (let index = 0; index < obj.results.length; index++) {
        const element = obj.word[index]["definition"];
        populate(element);
        console.log(element);
      }
    }
    else {
      console.log("Some error occured")
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
  }
  console.log(element); 

}