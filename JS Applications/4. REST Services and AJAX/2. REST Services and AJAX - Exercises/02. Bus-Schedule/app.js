const departBtn = document.querySelector("#depart");
const arriveBtn = document.querySelector("#arrive");

const result = (function () {
   const infoBox = document.querySelector("#info > span");
   let currentId = "depot";
   let currentName;

   function depart() {
      departBtn.disabled = true;
      arriveBtn.disabled = false;

      fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
         .then(verifyResponse)
         .then(res => res.json())
         .then(handleSuccess)
         .catch(handleError);

      function verifyResponse(res) {
         if (!res.ok) {
            return Promise.reject("Invalid response!");
         }

         return res;
      }
      
      function handleSuccess(data) {
         currentId = data.next;
         currentName = data.name;

         infoBox.textContent = `Next stop ${currentName}`;
      }

      function handleError() {
         departBtn.disabled = true;
         arriveBtn.disabled = true;

         infoBox.textContent = "Error...";
         window.alert("Something went wrong :(");
      }
   }

   function arrive() {
      departBtn.disabled = false
      arriveBtn.disabled = true;

      infoBox.textContent = `Arriving at ${currentName}`;
   }

   return {
      depart,
      arrive
   };
}())

departBtn.addEventListener("click", result.depart);
arriveBtn.addEventListener("click", result.arrive);