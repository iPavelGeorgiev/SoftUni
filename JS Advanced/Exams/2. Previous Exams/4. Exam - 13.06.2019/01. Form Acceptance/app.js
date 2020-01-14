function acceptance() {
   const shippingCompany = document.getElementsByName('shippingCompany')[0];
   const productName = document.getElementsByName('productName')[0];
   const productQuantity = document.getElementsByName('productQuantity')[0];
   const productScrape = document.getElementsByName('productScrape')[0];
   const warehouse = document.getElementById('warehouse');

   document.getElementById('acceptance').addEventListener('click', function () {
      addProduct(shippingCompany.value, productName.value, Number(productQuantity.value), Number(productScrape.value));
   });

   function validInput(shippingCompany, productName, productQuantity, productScrape) {
      return isValidString(shippingCompany)
         && isValidString(productName)
         && isValidNumber(productQuantity)
         && isValidNumber(productScrape);
   }

   function addProduct(shippingCompany, productName, productQuantity, productScrape) {
      if (validInput(shippingCompany, productName, productQuantity, productScrape)
          && productScrape < productQuantity) {
         const product = createElement(shippingCompany, productName, productQuantity - productScrape);
         clearData();
         warehouse.appendChild(product);
      }
   }

   function isValidString(input) {
      return typeof input == 'string' && input != '';
   }

   function isValidNumber(input) {
      return typeof input == 'number' && !isNaN(input);
   }

   function removeFromList(evt) {
      const current = evt.target;
      current.parentElement.remove();
   }

   function clearData() {
      shippingCompany.value = '';
      productName.value = '';
      productQuantity.value = '';
      productScrape.value = '';
   }

   function createElement(shippingCompany, productName, productQuantity) {
      const divElement = document.createElement('div');

      const pElement = document.createElement('p');
      pElement.innerHTML = `[${shippingCompany}] ${productName} - ${productQuantity} pieces`;

      const btn = document.createElement('button');
      btn.innerHTML = 'Out of stock';
      btn.setAttribute('type', 'button');
      btn.addEventListener('click', removeFromList);

      divElement.appendChild(pElement);
      divElement.appendChild(btn);

      return divElement;
   }
}