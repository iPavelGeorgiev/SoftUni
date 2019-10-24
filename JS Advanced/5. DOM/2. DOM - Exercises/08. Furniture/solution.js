function solve() {
  const input = document.getElementsByTagName('textarea')[0];
  const output = document.getElementsByTagName('textarea')[1];
  const products = [];
  let total = 0;
  let factor = 0;
 
  const generate = () => {
    Array.from(JSON.parse(input.value)).map(e => {
      let { img, name, price, decFactor } = e;
      const body = document.getElementsByTagName('tbody')[0];
      const tr = document.createElement('tr');
 
      tr.innerHTML = `<td><img src="${img}"></td>
      <td><p>${name}</p></td>
      <td><p>${price}</p></td>
      <td><p>${decFactor}</p></td>
      <td><input type="checkbox"/></td>`;
      body.appendChild(tr);
    });
  };
 
  const print = (products, total, decor, decorlength) => {
    output.value = `Bought furniture: ${products.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decor / decorlength}`;
  };
 
  const checkedItems = () => {
    return Array.from(document.querySelectorAll('tr'))
      .slice(1)
      .filter(e => e.lastElementChild.firstElementChild.checked);
  };
 
  const calculate = (product, price, fact) => {
    products.push(product);
    total += price;
    factor += fact;
  };
  const buy = () => {
    const lng = checkedItems().length;
    checkedItems().map(e => {
      calculate(e.children[1].textContent, Number(e.children[2].textContent), Number(e.children[3].textContent));
    });
    print(products, total, factor, lng);
  };
 
  document.getElementsByTagName('button')[1].addEventListener('click', buy);
  document.getElementsByTagName('button')[0].addEventListener('click', generate);
}