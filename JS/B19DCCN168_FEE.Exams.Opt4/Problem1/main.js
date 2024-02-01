var students = [
    {firstName: "Tran Thi Minh", lastName: "Thuy", studentCode: "B16DCXXYYY"},
    {firstName: "Le Thuy", lastName: "Trang", studentCode: "B17DCXXYYY"},
    {firstName: "Vu Thanh", lastName: "Loan", studentCode: "B18DCXXYYY"},
    {firstName: "Dam Thi", lastName: "Thu", studentCode: "B19DCXXYYY"},
];

const studentManagement = document.querySelector(".student-management");
const studentList = document.querySelector(".student-list");
const btnAdd = document.querySelector(".btn-add");
const addStudent = document.querySelector(".add-student");
const createBtn = document.querySelector("#create-btn");
const clearBtn = document.querySelector("#clear-btn");
const cancelBtn = document.querySelector("#cancel-btn");

let stt = students.length + 1;

function showStudentList() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td style="text-align: left;">${student.firstName}</td>
                <td style="text-align: left;">${student.lastName}</td>
                <td style="text-align: left;">${student.studentCode}</td>
                <td><button onclick ="deleteStudent(${student.id})"><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        `;
        studentList.innerHTML += row;
    });
}

function deleteStudent(studentId) {
    const index = students.findIndex(student => student.id === studentId);
    if (index !== -1) {
        students.splice(index, 1);
        showStudentList();
    }
}

btnAdd.addEventListener("click", function () {
    addStudent.style.display = "block";
    studentManagement.style.display = "none";
});

function addNewStudent(fname, lname, stdcode) {
    const newStudent = {
        firstName: fname,
        lastName: lname,
        studentCode: stdcode        
    };
    students.push(newStudent);
    showStudentList();
}

createBtn.addEventListener("click", function () {
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const stdCode =document.getElementById("studentCode").value;
    if (fName && lName && stdCode) {
        addNewStudent(fName, lName, stdCode);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("studentCode").value = "";
    }
    addStudent.style.display = "none";
    studentManagement.style.display = "block";
    showStudentList();
});

clearBtn.addEventListener("click", function () {
    students.length = 0;
    addStudent.style.display = "none";
    studentManagement.style.display = "block";
    showStudentList();
});

cancelBtn.addEventListener("click", function () {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("studentCode").value = '';
    addStudent.style.display = "none";
    studentManagement.style.display = "block";
    showStudentList();
});

showStudentList();