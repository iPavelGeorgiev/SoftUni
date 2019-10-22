function personalBMI(name, age, weight, height) {
   let calculateBMI = (function(w, h) {
      h /= 100;
      return Math.round(w / (h * h));
   })(weight, height);

   let checkStatus = (function(bmi) {
       if (bmi < 18.5) {
         return "underweight";
       } else if (bmi < 25) {
          return "normal";
       } else if (bmi < 30) {
          return "overweight";
      } else if (bmi >= 30) {
          return "obese";
      }
   })(calculateBMI);

   let obj = {
      name,
      "personalInfo": {
         age,
         weight,
         height
      },
      BMI: calculateBMI,
      status: checkStatus
   };

   if (obj.status === "obese") {
      obj["recommendation"] = "admission required";
   }

   return obj;
}

console.log(personalBMI(
   "Peter", 29, 755, 182
));