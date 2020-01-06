function solve() {
   const input = document.getElementById("array");
   const result = document.getElementById("result");

   function replaceWord(word) {
      word = word.replace(/!/g, 1);
      word = word.replace(/%/g, 2);
      word = word.replace(/#/g, 3);
      word = word.replace(/\$/g, 4);

      return word.toLowerCase();
   }

   function creatP(content) {
      const p = document.createElement("p");
      p.textContent = content;

      return p;
   }

   const array = JSON.parse(input.value);
   const specialKey = array.shift();
   const pattern = new RegExp(`(\\s|^)(${specialKey}\\s+)([!#$%A-Z]{8,})(\\.|,|\\s|$)`, 'gim');

   array.forEach(element => {
      while (encodeMessage = pattern.exec(element)) {
         if (encodeMessage[3].toUpperCase() === encodeMessage[3]) {
            element = element.replace(encodeMessage[3], replaceWord(encodeMessage[3]));
         }
      }

      result.appendChild(creatP(element));
   });

   input.value = "";
}