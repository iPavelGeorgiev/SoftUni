const div = document.getElementById("res");
const button = document.querySelector("body > button");
button.addEventListener("click", loadRepo);

function loadRepo() {
   const url = "https://api.github.com/users/testnakov/repos";
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         div.textContent = httpRequest.responseText;
      }
   })

   httpRequest.open("GET", url);
   httpRequest.send();
}