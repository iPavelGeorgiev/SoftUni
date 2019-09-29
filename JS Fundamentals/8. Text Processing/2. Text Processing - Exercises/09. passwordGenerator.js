function passwordGenerator(input) {
   let vowels = ["a", "e", "i", "o", "u"];
   let password = [...input[0], ...input[1]];
   let word = input[2].split("");

   for (let i = 0; i < password.length; i++) {
      let char = password[i].toLowerCase();

      if (word.length === 0) word = input[2].split("");

      if (vowels.includes(char)) {
         password[i] = word.shift().toUpperCase();
      }
   }

   password = password.reverse().join("");

   console.log(`Your generated password is ${password}`);
}

passwordGenerator([
   'ilovepizza', 'ihatevegetables',
   'orange'
   ])