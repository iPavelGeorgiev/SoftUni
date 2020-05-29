class Person {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   }

   set fullName(value) {
      let [name, surname] = value.split(" ");

      if (value !== "", surname !== undefined) {
         this.firstName = name;
         this.lastName = surname;
      }
   }
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson
