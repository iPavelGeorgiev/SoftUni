function solve() {
   const [titleInput, yearInput, priceInput] = Array.from(document.querySelectorAll("form > input"))
   const [oldBooks, newBooks] = Array.from(document.querySelectorAll(".bookShelf"));
   const totalProfitHeader = document.querySelector("body > h1:nth-child(3)");
   const createNewBookBtn = document.querySelector("body > form > button");
   let totalProfit = 0;

   createNewBookBtn.addEventListener("click", function (e) {
      e.preventDefault()
      const bookTitle = titleInput.value;
      const year = Number(yearInput.value);
      const price = Number(priceInput.value);

      if (bookTitle !== "" && year > 0 && price > 0) {

         if (year >= 2000) {
            createBookshelf(bookTitle, year, price, true);
         } else {
            createBookshelf(bookTitle, year, price, false);
         }
      }

      titleInput.value = "";
      yearInput.value = "";
      priceInput.value = "";
   })

   function createBookshelf(bookTitle, year, price, isNew) {
      const div = document.createElement("div");
      div.classList.add("book");

      const p = document.createElement("p");
      p.textContent = `${bookTitle} [${year}]`;

      div.appendChild(p);

      if (isNew) {
         const buyBtn = document.createElement("button");
         buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
         buyBtn.addEventListener("click", function () {
            totalProfit += price;
            totalProfitHeader.textContent = `Total Store Profit: ${totalProfit.toFixed(2)} BGN`;
            this.parentElement.parentElement
               .removeChild(this.parentElement);
         })

         const moveBtn = document.createElement("button");
         moveBtn.textContent = "Move to old section";
         moveBtn.addEventListener("click", function () {
            this.parentElement.parentElement
               .removeChild(this.parentElement);

            createBookshelf(bookTitle, year, price, false);
         })

         div.appendChild(buyBtn);
         div.appendChild(moveBtn);
         newBooks.appendChild(div);
      } else {
         const buyBtn = document.createElement("button");
         buyBtn.textContent = `Buy it only for ${(price * 0.85).toFixed(2)} BGN`;
         buyBtn.addEventListener("click", function () {
            totalProfit += price * 0.85;
            totalProfitHeader.textContent = `Total Store Profit: ${totalProfit.toFixed(2)} BGN`;
            this.parentElement.parentElement
               .removeChild(this.parentElement);
         })

         div.appendChild(buyBtn);
         oldBooks.appendChild(div);
      }
   }
}