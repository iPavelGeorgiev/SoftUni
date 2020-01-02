class CheckingAccount {
   constructor(clientId, email, firstName, lastName) {
     this.clientId = clientId;
     this.email = email;
     this.firstName = firstName;
     this.lastName = lastName;
  
     if (!(/^\d{6}$/gim).test(this.clientId)) {
       throw new TypeError(`Client ID must be a 6-digit number`);
     }

     if (!(/\w+@[\w.]+\w+/gim).test(this.email)) {
       throw new TypeError(`Invalid e-mail`);
     }

     if (this.firstName.length < 3 || this.firstName.length > 20) {
       throw new TypeError(`First name must be between 3 and 20 characters long`);
     }

     if (!(/^[A-Za-z]{3,20}$/gim).test(this.firstName)) {
       throw new TypeError(`First name must contain only Latin characters`);
     }
  
     if (this.lastName.length < 3 || this.lastName.length > 20) {
       throw new TypeError(`Last name must be between 3 and 20 characters long`);
     }

     if (!(/^[A-Za-z]{3,20}$/gim).test(this.lastName)) {
       throw new TypeError(`Last name must contain only Latin characters`);
     }
   }
 }

 let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
 console.log(acc1);