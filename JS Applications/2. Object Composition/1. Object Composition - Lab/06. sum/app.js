function solve() {
   function init(a, b, r) {
      this.selector1 = document.querySelector(a);
      this.selector2 = document.querySelector(b);
      this.result = document.querySelector(r);
   }

   function add() {
      this.result.value = Number(this.selector1.value) + Number(this.selector2.value);
   }

   function subtract() {
      this.result.value = -(Number(this.selector2.value) - Number(this.selector1.value));
   }

   const obj = {
      init,
      add,
      subtract,
   };

   obj.init("#num1", "#num2", "#result");

   const selectors = {
      sumBtn: () => document.querySelector("#sumButton"),
      subtractBtn: () => document.querySelector("#subtractButton")
   };

   selectors.sumBtn().addEventListener("click", add.bind(obj));
   selectors.subtractBtn().addEventListener("click", subtract.bind(obj));

   return obj;
}

solve();