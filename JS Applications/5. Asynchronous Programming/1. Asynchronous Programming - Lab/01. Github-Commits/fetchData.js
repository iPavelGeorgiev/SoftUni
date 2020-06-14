function deserializeData(data) {
   return data.json();
}

function handleError(res) {
   if (!res.ok) {
      return Promise.reject({
         status: res.status,
         statusText: res.statusText,
         reason: "Invalid github username or password!"
      })
   }

   return res;
}

export function fetchData(createValidLI, createInvalidLI, url) {
   return fetch(url)
      .then(handleError)
      .then(deserializeData)
      .then(createValidLI)
      .catch(e => {
         console.error(e.reason);
         const status = e.status;
         const statusText = e.statusText;
         return createInvalidLI(status, statusText);
      });
}