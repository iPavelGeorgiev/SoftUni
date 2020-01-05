function solve() {
   const input = document.getElementById("text");
   const result = document.getElementById("result");
   result.textContent = "";

   function createP(content) {
      const p = document.createElement('p');
      p.textContent = content;
      return p;
   }

   function convert(str) {
      let word = "";

      str.split(" ")
         .filter(x => x !== "")
         .forEach(element => {
            if (!isNaN(element)) {
               word += String.fromCharCode(element);
            } else {
               const convertedElements = element
                  .split('')
                  .map(x => x.charCodeAt())
                  .join(' ');;

               result.appendChild(createP(convertedElements));
            }
         });

      result.appendChild(createP(word));
   }

   convert(input.value);
   input.textContent = "";
}