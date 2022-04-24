// Pretend This response is coming from the sever
const students = [
  { name: "Kena", Subject: "Javascript-React" },
  { name: "Tena", Subject: "Python" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

function getStudent() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  }, 5000);
}

let newStudent = { name: "Sunny", subject: "Go" };
enrollStudent(newStudent).then(getStudent).catch(function (){
    console.log("Something went Wrong")
});
// getStudent();
