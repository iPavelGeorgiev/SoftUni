function solve() {
   const addBtns = document.querySelectorAll(".add-product");
   const checkoutBtn = document.querySelector("body > div > button");
   let output = document.querySelector("body > div > textarea");
   let totalPrice = 0;
   let items = [];

   addBtns.forEach(x => x.addEventListener("click", addProduct));

   checkoutBtn.addEventListener("click", checkout);

   function checkout() {
      addBtns.forEach(x => x.removeEventListener("click", addProduct));
      
      if (output.value !== "") {
         output.value += `You bought ${items.join(", ")} for ${totalPrice.toFixed(2)}.`;
      }
      
      checkoutBtn.removeEventListener("click", checkout);
   }

   function addProduct(e) {
      let itemName = e.target.parentElement.previousElementSibling.children[0].textContent;
      let itemPrice = e.target.parentElement.nextElementSibling.textContent;

      if (!items.includes(itemName)) {
         items.push(itemName);
      }

      totalPrice += Number(itemPrice);
      output.value += `Added ${itemName} for ${itemPrice} to the cart.\n`;
   }
}