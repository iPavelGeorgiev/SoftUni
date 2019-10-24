function solve() {
   let input = document.querySelector("#searchField");
   let searchBtn = document.querySelector("#searchBtn");
   let cells = document.querySelector("body > table > tbody").children;

   searchBtn.addEventListener("click", function () {
      let searchText = input.value;

      Array.from(cells).forEach(x => {
         let fields = Array.from(x.children);
         let found = false;

         for (const td of fields) {
            if (td.textContent.includes(searchText)) {
               found = true;
            }
         }

         if (found === true) {
            x.classList.add("select");
         } else {
            x.classList.remove("select");
         }
      })

      input.value = "";
   })
}