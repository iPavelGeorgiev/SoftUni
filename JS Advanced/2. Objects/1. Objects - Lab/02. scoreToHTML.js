function scoreToHTML(data) {
   function escapeHtml(str) {
      const map = {
         '&': '&amp;',
         '<': '&lt;',
         '>': '&gt;',
         '"': '&quot;',
         "'": '&#39;'
      };
      return str.replace(/[&<>"']/g, function(m) { return map[m]; });
   }

   function printTable(arr) {
      let print = `<table>\n   <tr><th>name</th><th>score</th></tr>\n`;

      for (let i = 0; i < arr.length; i++) {
         let name = escapeHtml(arr[i].name);
         let score = arr[i].score;

         print += `   <tr><td>${name}</td><td>${score}</td></tr>\n`;
      }
      print += `</table>`;
      console.log(print);
   }

   const parseToArrayOfObjects = JSON.parse(data);
   printTable(parseToArrayOfObjects);
}

scoreToHTML(JSON.stringify([{ "name": "Pesho & Kiro", "score": 479 }, { "name": "Gosho, Maria & Viki", "score": 205 }]))