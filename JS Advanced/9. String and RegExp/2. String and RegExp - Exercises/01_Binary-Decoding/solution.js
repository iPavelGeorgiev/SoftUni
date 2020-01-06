function solve() {
   const input = document.getElementById("input");
   const result = document.getElementById("resultOutput");

   function sumDigits(n) {
      let copyInput = n;

      while (copyInput.length > 1) {
         const temp = copyInput
            .split('')
            .reduce((accu, curr) => accu + Number(curr), 0)
            .toString();
         copyInput = temp;
      }

      return copyInput;
   }

   function binaryDecoding(n) {
      return sumDigits(sumDigits(n));
   }

   function cutText(text, n) {
      return text.substring(n, text.length - n);
   }

   function convert(text) {
      return cutText(text, binaryDecoding(text))
         .split(/([\d]{8})/)
         .map(x => parseInt(x, 2))
         .map(x => String.fromCharCode(x))
         .filter(x => x.match(/[A-Za-z\s]/g))
         .join('');
   }

   result.textContent = convert(input.value);
   input.value = "";
}