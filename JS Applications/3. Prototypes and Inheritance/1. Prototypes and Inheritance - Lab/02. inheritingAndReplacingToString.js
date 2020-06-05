function personAndTeacher() {
   class Person {
      constructor(name, email) {
         this.name = name;
         this.email = email;
      }

      toString() {
         if (this.constructor.length <= 2) {
            return `${this.constructor.name} (name:${this.name}, email:${this.email})`;
         } else {
            const thirdProp = this.constructor.name === "Teacher" ? "subject" : "course";

            return `${this.constructor.name} (name:${this.name}, email:${this.email}, ${thirdProp}: ${this[thirdProp]})`;
         }
      }
   }

   class Teacher extends Person {
      constructor(name, email, subject) {
         super(name, email);
         this.subject = subject;
      }
   }

   class Student extends Person {
      constructor(name, email, course) {
         super(name, email);
         this.course = course;
      }
   }

   return {
      Person,
      Teacher,
      Student
   }
}

const create = personAndTeacher();

const Person = create.Person;
const person = new Person("Pavel", "iPavelGeorgiev@outlook.com");
console.log(person.toString());

const Teacher = create.Teacher;
const teacher = new Teacher(person.name, person.email, "Computer programming");
console.log(teacher.toString());

const Student = create.Student;
const student = new Student("Pavel", "iPavelGeorgiev@outlook.com", "JS Web");
console.log(student.toString());