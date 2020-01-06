function solve() {
   const input = document.getElementById("string");
   const result = document.getElementById("result");
   result.innerHTML = "";

   function extractPassengerName(string) {
      const pattern = /\s([A-Z][a-z]+-[A-Z][a-z]+|[A-Z][a-z]+-[A-Z][a-z]+\.-[A-Z][a-z]+)\s/gm;
      const name = pattern.exec(string)[1];
      return name.replace(/\-/gm, " ");
   }

   function extractAirport(string) {
      const pattern = /\s([A-Z]{3})\/([A-Z]{3})\s/gm;
      const airport = pattern.exec(string);
      return [airport[1], airport[2]];
   }

   function extractFlightNumber(string) {
      const pattern = /\s([A-Z]{1,3}\d{1,5})\s/gm;
      return pattern.exec(string)[1];
   }

   function extractCompany(string) {
      const pattern = /-\s([A-Z][a-z]*\*[A-Z][a-z]*)\s/gm;
      const company = pattern.exec(string)[1];
      return company.replace("*", " ");
   }

   function extract(string, type) {
      const flightInfo = {}

      if (type === "all") {
         flightInfo.name = extractPassengerName(string);
         flightInfo.airport = extractAirport(string);
         flightInfo.flightNumber = extractFlightNumber(string);
         flightInfo.company = extractCompany(string);
      } else if (type === "name") {
         flightInfo.name = extractPassengerName(string);
      } else if (type === "flight") {
         flightInfo.airport = extractAirport(string);
         flightInfo.flightNumber = extractFlightNumber(string);
      }

      return flightInfo;
   }

   function print(string) {
      const [text, requiredInfo] = string.split(", ");
      const info = extract(text, requiredInfo);

      if (requiredInfo === "all") {
         return `Mr/Ms, ${info.name}, your flight number ${info.flightNumber} is from ${info.airport[0]} to ${info.airport[1]}. Have a nice flight with ${info.company}.`;
      } else if (requiredInfo === "name") {
         return `Mr/Ms, ${info.name}, have a nice flight!`;
      } else if (requiredInfo === "flight") {
         return `Your flight number ${info.flightNumber} is from ${info.airport[0]} to ${info.airport[1]}.`;
      }

      return "Invalid Input!";
   }

   function createP(content) {
      const p = document.createElement("p");
      p.textContent = content;
      return p;
   }

   result.appendChild(createP(print(input.value)));
   input.value = "";
}