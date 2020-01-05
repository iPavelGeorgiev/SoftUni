function solve() {
   const text = document.getElementById("text");
   const number = document.getElementById("number");
   const result = document.getElementById("result");

   function stringEqually(string, n) {
      return string
         .padEnd(Math.ceil(string.length / n) * n, string)
         .match(new RegExp('.'.repeat(n), 'g'))
         .join(' ');
   }

   result.textContent = stringEqually(text.value, number.value);
}