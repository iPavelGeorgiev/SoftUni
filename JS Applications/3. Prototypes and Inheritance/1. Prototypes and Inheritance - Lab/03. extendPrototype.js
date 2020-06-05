function extendPrototype(Class, type) {
   Class.prototype.species = type;
   Class.prototype.toSpeciesString = function () {
      return `I am a ${this.species}. ${this.toString()}`;
   };
}

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

extendPrototype(Person, "Human");
const person = new Person('Eray', 'errayerrol@gmail.com');
console.log(person.toSpeciesString());

extendPrototype(Teacher, "Alien");
const teacher = new Teacher('Eray', 'errayerrol@gmail.com', 'Coding');
console.log(teacher.toSpeciesString());

extendPrototype(Student, "Mammal");
const student = new Student('Eray', 'errayerrol@gmail.com', 'JavaScript Applications');
console.log(student.toSpeciesString());