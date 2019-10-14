function dayOfWeek(input) {
   const days = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7
   }

   let output;

   if (days[input] !== undefined) {
      output = days[input];
   } else {
      output = "error";
   }

   return output;
}

console.log(
   dayOfWeek("Monday")
);