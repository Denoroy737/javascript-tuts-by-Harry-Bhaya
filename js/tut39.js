console.log("Promise: Best video on promises");
// Promise: Best video on promises
// -resolve
// -reject
// -pending

function fun1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (!error) {
        console.log("Function: Your promise has been resolved");
        resolve();
      } else {
        console.log("Function: Your promise has not been resolved");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}

fun1().then(function(){
    console.log("Tena: Thanks for resolving")
}).catch(function(error){
    console.log("Tena: fun1 it's not good :Reason " + error)
})

