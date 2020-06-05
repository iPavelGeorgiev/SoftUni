function personAndTeacher() {
   class Person {
      constructor(name, email) {
         this.name = name;
         this.email = email;
      }
   }

   class Teacher extends Person {
      constructor(name, email, subject) {
         super(name, email);
         this.subject = subject;
      }
   }

   return {
      Person,
      Teacher
   }
}

const create = personAndTeacher();

const Person = create.Person;
const person = new Person("Pavel", "iPavelGeorgiev@outlook.com");
console.log(person);

const Teacher = create.Teacher;
const teacher = new Teacher(person.name, person.email, "Web Development");
console.log(teacher);