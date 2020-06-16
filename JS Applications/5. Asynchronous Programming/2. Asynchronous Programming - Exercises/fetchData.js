function request(url, params, method = "GET") {
   let options = {
      method,
      headers: {
         "Content-Type": "application/json"
      }
   };

   if (params && method !== "GET") {
      options.body = JSON.stringify(params);
   }

   return fetch(url, options)
      .then(handleError)
      .then(deserializeData)
}

function deserializeData(data) {
   return data.json();
}

function handleError(res) {
   if (!res.ok) {
      return Promise.reject("The server responded with an unexpected status.");
   }

   return res;
}

// CRUD operations

function get(url) {
   return request(url);
}

function create(url, params) {
   return request(url, params, "POST");
}

function update(url, params) {
   return request(url, params, "PUT");
}

function remove(url) {
   return request(url, undefined, "DELETE");
}

export default {
   get,
   create,
   update,
   remove
};