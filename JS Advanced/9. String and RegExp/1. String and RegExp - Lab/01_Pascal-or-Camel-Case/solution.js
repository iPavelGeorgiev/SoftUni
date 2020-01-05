function solve() {
   const text = document.getElementById("text");
   const convention = document.getElementById("naming-convention");
   const resultContainer = document.getElementById("result");
   resultContainer.textContent = "";

   const split = text.value
      .toLowerCase()
      .split(" ")
      .filter(x => x !== "");
   let output = "";

   split.forEach(word => {
      word = word.replace(word[0], word[0].toUpperCase());
      output += word;
   });

   if (convention.value === "Camel Case") {
      output = output.replace(output[0], output[0].toLowerCase());
   } else if (convention.value !== "Pascal Case") {
      output = "Error!";
   }

   text.value = "";
   convention.value = "";
   resultContainer.textContent = output;
}