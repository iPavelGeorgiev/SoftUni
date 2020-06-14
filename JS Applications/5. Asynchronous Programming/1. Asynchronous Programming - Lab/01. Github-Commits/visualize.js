export function createValidLI(data) {
   var fragment = document.createDocumentFragment();
   data
      .forEach(x => {
         const li = document.createElement("li");
         li.textContent = `${x.commit.author.name}: ${x.commit.message}`;
         fragment.appendChild(li);
      });
      
   return fragment;
}

export function createInvalidLI(status, statusText) {
   const li = document.createElement("li");
   li.textContent = `Error: ${status} (${statusText})`;
   return li;
}
