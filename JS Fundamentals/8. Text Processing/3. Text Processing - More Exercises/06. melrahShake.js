function melrahShake(input) {
   let text = input.shift();
   let pattern = input.shift();
   let copyText;

   while (pattern.length > 0) {

      if (text.indexOf(pattern) !== -1) {
         text = text.replace(pattern, "");
         copyText = text;
      } else {
         console.log("No shake.");
         console.log(text);
         break;
      }
      if (text.lastIndexOf(pattern) !== -1) {
         let index = text.lastIndexOf(pattern);
         text = text.substring(0, index) + text.substring(index + pattern.length);
      } else {
         console.log("No shake.");
         console.log(copyText);
         break;
      }

      console.log("Shaked it.");
      let toCutIndex = Math.trunc(pattern.length / 2);
      pattern = pattern.substring(0, toCutIndex) + pattern.substring(toCutIndex + 1);
   }

   if (pattern === "") {
      console.log("No shake.");
      console.log(text);
   }
}

melrahShake([ 'astalavista baby', 'sta', '' ])