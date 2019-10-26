function create(words) {
   let mainDiv = document.getElementById("content");

   // Create a div with a paragraph with the hidden string in it
   words.forEach(w => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = w;
      p.style.display = "none";

      div.appendChild(p);
      mainDiv.appendChild(div);
   })

   // Change paragraph display style to block;
   mainDiv.addEventListener("click", function displayHandler(e) {
      e.target.children[0].style.display = "block";
   })
}