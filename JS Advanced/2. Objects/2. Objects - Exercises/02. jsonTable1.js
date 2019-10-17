function jsonTable1(json) {
   function escapeHTML(str) {
      const map = {
         '&': '&amp;',
         '<': '&lt;',
         '>': '&gt;',
         '"': '&quot;',
         "'": '&#39;'
      };

      return str.replace(/[&<>"']/gim, function (m) { return map[m]; })
   }

   function createEmployeeRow(obj) {
      let name = escapeHTML(obj.name);
      let position = escapeHTML(obj.position);
      let salary = Number(obj.salary);

      return ['	<tr>', `		<td>${name}</td>`, `		<td>${position}</td>`, `		<td>${salary}</td>`, '	</tr>'];
   }

   let employeesTable= ["<table>"];

   for (let line of json) {
      let parseToObj = JSON.parse(line);
      let employeeRow = createEmployeeRow(parseToObj);
      employeesTable.push(...employeeRow);
   }

   employeesTable.push("</table>");
   return employeesTable.join(`\n`);
}

console.log(jsonTable1(
   [
      '{"name":"Pesho","position":"Promenliva","salary":100000}',
      '{"name":"Teo","position":"Lecturer","salary":1000}',
      '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]
))