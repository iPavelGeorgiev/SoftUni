import Fetch from "../requester.js";
import { createStudentsTr } from "./view.js";

const selectors = {
   form: {
      id: () => document.querySelector("#id"),
      firstName: () => document.querySelector("#first-name"),
      lastName: () => document.querySelector("#last-name"),
      facultyName: () => document.querySelector("#faculty-name"),
      grade: () => document.querySelector("#grade"),
   },
   loadAllStudentsBtn: () => document.querySelector("#load-students"),
   addStudentBtn: () => document.querySelector("#add-student"),
   studentsContainer: () => document.querySelector("#results > tbody")
}

function addStudent() {
   const id = selectors.form.id();
   const firstName = selectors.form.firstName();
   const lastName = selectors.form.lastName();
   const facultyName = selectors.form.facultyName();
   const grade = selectors.form.grade();

   const params = {
      id: id.value,
      firstName: firstName.value,
      lastName: lastName.value,
      facultyName: facultyName.value,
      grade: grade.value
   }

   Fetch.create("appdata", "students", params)
      .catch(err => console.error(err));

   id.value = "";
   firstName.value = "";
   lastName.value = "";
   facultyName.value = "";
   grade.value = "";
}

async function loadAllStudents() {
   const studentsContainer = selectors.studentsContainer();
   studentsContainer.innerHTML = "";

   try {
      const students = await Fetch.get("appdata", "students");
      students.sort((a, b) => Number(a.id) - Number(b.id));

      const fragment = createStudentsTr(students);
      studentsContainer.appendChild(fragment);
   } catch (err) {
      console.error(err);
   }
}

(function attachEvents() {
   selectors.addStudentBtn().addEventListener("click", addStudent);
   selectors.loadAllStudentsBtn().addEventListener("click", loadAllStudents);
}())