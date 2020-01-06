function solve() {
   const string = document.getElementById("string");
   const text = document.getElementById("text");
   const result = document.getElementById("result");

   function findCoordinates(text) {
      const pattern = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
      let north;
      let east;
      
      while ((valid = pattern.exec(text)) !== null) {
         const northOrEast = valid[1];

         if (northOrEast.toLowerCase() === 'north') {
            north = `${valid[2]}.${valid[3]} N`;
         } else if (northOrEast.toLowerCase() === 'east') {
            east = `${valid[2]}.${valid[3]} E`;
         }
      }
      return [north, east];
   }

   function findMessage(text, str) {
      const msg = text.slice(text.indexOf(str) + str.length, text.lastIndexOf(str));
      return [`Message: ${msg}`];
   }

   function creatP(content) {
      const p = document.createElement("p");
      p.textContent = content;
      return p;
   }

   findCoordinates(text.value).concat(findMessage(text.value, string.value))
      .forEach(x => {
         result.appendChild(creatP(x));
      });
   
   string.value = "";
   text.value = "";
}