const selectors = {
   tbody: () => document.querySelector("body > table > tbody")
}

selectors.tbody().addEventListener("click", changeBackgroundColor)

function changeBackgroundColor(e){
   const row = e.target.parentElement;

   if (row.style.backgroundColor !== "") {
      row.removeAttribute("style");
   } else {
      row.style.backgroundColor = "#413f5e";
   }
}
