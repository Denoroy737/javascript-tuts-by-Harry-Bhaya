console.log("Hey we get tut37");

// Pretend This response is coming from the sever
const students = [
  { name: "Kena", Subject: "Javascript-React" },
  { name: "Tena", Subject: "Python" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 1000);
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
enrollStudent(newStudent, getStudent      );
// getStudent();
