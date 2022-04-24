console.log("This is my tutorial 42");

// Button with id myBtn
let Btn = document.getElementById("Btn");
let content = document.getElementById("content");

// function GetData() {
//   console.log("Started getData");
//   url = "package.json";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.text();
//     })
//     .then((data) => {
//     console.log("Inside second then");
//     console.log(data);
//     });
// }

function GetData() {
  console.log("Started getData");
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      console.log("Inside first then");
      return response.json();
    })
    .then((data) => {
    console.log("Inside second then");
    console.log(data);
    });
}

// GetData()

function PostData() {
    url = "https://reqres.in/api/users";
    data = '{"name": "Tena", "job": "Lamjp"}'
    params = {
        method: "post",
        headers:{
            'Content-Type': 'application/json'
        },
        bady: data
    }
    fetch(url,params).then(response => response.json())
    .then(data => console.log(data))
}
// console.log("Before running getData")
// getData()
// console.log("After running getData")
PostData()