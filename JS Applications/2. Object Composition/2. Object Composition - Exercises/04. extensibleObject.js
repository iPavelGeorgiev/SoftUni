function extensibleObject(){
   function extend(template){
       for (const key in template) {
           if (template.hasOwnProperty(key)) {
               if(typeof template[key] === 'function'){
                   this.__proto__[key] = template[key];
               }
               this[key] = template[key];
           }
       }
       
       return this;
   }

   return { extend };
}