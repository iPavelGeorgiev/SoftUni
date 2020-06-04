function constructionCrew(obj) {
   let newObj = Object.assign(obj);

   if (obj.dizziness) {
      const requiredAmount = newObj.levelOfHydrated + (newObj.weight * 0.1 * newObj.experience);

      newObj.levelOfHydrated = requiredAmount;
      newObj.dizziness = false;
   }

   return newObj;
}

console.log(
   constructionCrew(
      { weight: 120,
         experience: 20,
         levelOfHydrated: 200,
         dizziness: true }             
   )
);