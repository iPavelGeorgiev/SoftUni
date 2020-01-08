function solve() {
   let el = {
      availableProducts: document.getElementsByTagName('section')[0],
      myProducts: document.getElementsByTagName('section')[1]
   }

   function getProductName(element) {
      return element.querySelector('span').textContent;
   }

   function getProductPrice(element) {
      return element.querySelector('strong').textContent;
   }

   function decreaseQuantity(element) {
      const quantity = element.querySelector('strong');
      const regex = /[\d.]+/gim;

      const new_quantity = (x) => {
         let a = Number(x - 1);
         if (a < 1)
            element.remove()
         return a;
      };

      const replacement = quantity.textContent.replace(regex, new_quantity);
      quantity.textContent = replacement;
   }

   function buildButton(text, fn) {
      const button = document.createElement('button');
      button.textContent = text;

      if (fn) {
         button.addEventListener('click', fn);
      }

      return button;
   }

   function buildProduct(name, quantity, price) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = name.value;
      const strong = document.createElement('strong');
      strong.textContent = `Available: ${Number(quantity.value)}`;

      const div = document.createElement('div');
      const strong2 = document.createElement('strong');
      strong2.textContent = Number(price.value).toFixed(2);
      const button = buildButton("Add to Client's List", handleAddToClient);

      [strong2, button].forEach(x => div.appendChild(x));
      [span, strong, div].forEach(x => li.appendChild(x));
      return li;
   }

   function handleAdd(e) {
      e.preventDefault();

      const [name, quantity, price] = document.querySelectorAll("#add-new input");
      const productHTML = buildProduct(name, quantity, price);

      el.availableProducts.querySelector('ul').appendChild(productHTML);
   }

   function handleAddToClient(e) {
      const parent = e.target.parentElement;
      const grandparent = e.target.parentElement.parentElement;
      const name = getProductName(grandparent);

      const price = document.createElement('strong');
      price.textContent = getProductPrice(parent);

      const li = document.createElement('li');
      li.textContent = name;
      li.appendChild(price);

      el.myProducts.querySelector('ul').appendChild(li);
      decreaseQuantity(grandparent);

      const totalPrice = document.querySelector("body > h1:nth-child(4)");
      const regex = /[\d.]+/gm;
      const addPrice = Number(price.textContent.match(regex)[0]);
      const newPrice = totalPrice.textContent.replace(regex, (x) => (Number(x) + addPrice).toFixed(2));
      totalPrice.textContent = newPrice;
   }

   function handleFilter(e) {
      const filterKeyword = document.querySelector('#products .filter input').value;

      Array.from(el.availableProducts.querySelectorAll('ul li')).forEach(product => {
         const name = product.firstElementChild.textContent;

         product.style.display = name.includes(filterKeyword) ? 'block' : 'none';
      });
   }

   function handleBuy(e) {
      const parent = e.target.parentElement;
      parent.querySelector('ul').textContent = '';
      
      const totalPrice = document.getElementsByTagName('h1')[1];
      const regex = /[\d.]+/gm;
      const newPrice = totalPrice.textContent.replace(regex, "0.00");
      totalPrice.textContent = newPrice;
   }

   function init() {
      let submit = document.querySelector('#add-new button');
      submit.addEventListener("click", handleAdd);

      let filter = document.querySelector('#products .filter button');
      filter.addEventListener("click", handleFilter);

      let buy = document.querySelector('#myProducts button');
      buy.addEventListener("click", handleBuy);
   }

   init();
}