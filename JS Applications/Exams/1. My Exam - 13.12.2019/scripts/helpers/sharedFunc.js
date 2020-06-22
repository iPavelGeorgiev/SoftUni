function clearAllFields() {
   $("input[type=text]").val("");
   $("input[type=password]").val("");
   $("textarea").val("");
   //$("#selectCategory").prop("selectedIndex", 0);
}

function displayError(message) {
   const errorBox = document.getElementById("errorBox");
   errorBox.textContent = message;
   errorBox.style.display = "block";

   setTimeout(() => {
      errorBox.style.display = "none";
   }, 5000);
}

function displaySuccess(message) {
   const successBox = document.getElementById("successBox");
   successBox.textContent = message;
   successBox.style.display = "block";

   setTimeout(() => {
      successBox.style.display = "none";
   }, 5000);
}

function displayLoading(status) {
   const loadingBox = document.getElementById("loadingBox");

   if (status) {
      loadingBox.style.display = "block";
   } else {
      loadingBox.style.display = "none";
   }
}

export default {
   clearAllFields,
   displayError,
   displaySuccess,
   displayLoading
};