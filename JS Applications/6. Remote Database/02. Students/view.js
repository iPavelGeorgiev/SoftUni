export function createStudentsTr(students) {
   const fragment = document.createDocumentFragment();

   students.forEach(student => {
      const id = student.id;
      const firstName = student.firstName;
      const lastName = student.lastName;
      const facultyName = student.facultyName;
      const grade = student.grade;

      const tr = document.createElement("tr");

      const idTd = document.createElement("td");
      idTd.textContent = id;

      const firstNameTd = document.createElement("td");
      firstNameTd.textContent = firstName;

      const lastNameTd = document.createElement("td");
      lastNameTd.textContent = lastName;

      const facultyNameTd = document.createElement("td");
      facultyNameTd.textContent = facultyName;

      const gradeTd = document.createElement("td");
      gradeTd.textContent = grade;

      tr.append(idTd, firstNameTd, lastNameTd, facultyNameTd, gradeTd);
      fragment.appendChild(tr);
   });
   
   return fragment;
}
