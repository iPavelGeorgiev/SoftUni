(function () {
   String.prototype.ensureStart = function (str) {
      if (this.startsWith(str)) {
         return this.toString();
      }
      return `${str}${this}`;
   };

   String.prototype.ensureEnd = function (str) {
      if (this.endsWith(str)) {
         return this.toString();
      }
      return `${this}${str}`;
   };

   String.prototype.isEmpty = function () {
      return this.length === 0;
   };

   String.prototype.truncate = function (n) {
      if (n < 4) {
         return '.'.repeat(n);
      }
      if (this.length <= n) {
         return this.toString();
      }
      const index = this.substr(0, n - 2).lastIndexOf(" ");
      if (index === - 1) {
         return `${this.substr(0, n - 3)}...`;
      }
      return `${this.substr(0, index)}...`;
   };

   String.format = function (str, ...params) {
      return params
         .reduce((str, param, i) => {
            return str.replace(`{${i}}`, param);
         }, str);
   }
}())