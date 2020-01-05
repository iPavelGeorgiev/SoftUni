function solve() {
   const array = document.getElementById("arr");
   const result = document.getElementById("result");

   function extract(string) {
       const pattern = /[^\d+\-]+|[\d+\- ]+/g;
       return string.match(pattern)
           .map(x => x.trim());
   }

   function createP(content) {
       const p = document.createElement('p');
       p.textContent = content;
       return p;
   }

   function extractData(arr) {
       return JSON.parse(arr)
           .map(extract)
           .map(([ name, phone, email ]) => {
               if (!name.match(/^[A-Z][a-z]* [A-Z][a-z]*$/g)) {
                   return createP('Invalid data');
               }

               if (!email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g)) {
                   return createP('Invalid data');
               }

               if (!phone.match(/\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}/g)) {
                   return createP('Invalid data');
               }

               return [
                   createP(`Name: ${name}`),
                   createP(`Phone Number: ${phone}`),
                   createP(`Email: ${email}`),
               ];
           });
   }

   extractData(array.value).forEach(e => {
       if (Array.isArray(e)) {
           e.forEach(x => result.appendChild(x));
           result.appendChild(createP('- - -'));
       } else {
           result.appendChild(e);
           result.appendChild(createP('- - -'));
       }
   });
}