function wordsUppercase(string) {
   string = string.toUpperCase();
   let result = string.match(/\w+/gim).join(", ");

   return result;
}

console.log(
   wordsUppercase('Hi, how are you?')
);