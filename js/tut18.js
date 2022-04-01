console.log("Welcomek to tut 18");
let btn = document.getElementById("btn");
// btn.addEventListener("click", func1);
// btn.addEventListener("mousedown", func2);
btn.addEventListener("dblclick", func3);

// function func1(e) {
//   console.log("thanks a lot its working", e);
//   e.preventDefault();
// }

// function func2(e) {
//   console.log("thanks a lot func2 its working now", e);
//   e.preventDefault();
// }

function func3(e) {
  console.log("thanks a lot func3 its working now", e);
  e.preventDefault();
}
document.querySelector(".no").addEventListener("mouseenter", function () {
  console.log("You entered in no");
});

document.querySelector(".no").addEventListener("mouseleave", function () {
  console.log("You Exited from no");
});

document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 432)`;
    console.log("You triggered mouse move event");
  });
