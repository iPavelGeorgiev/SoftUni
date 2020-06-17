const encodedCredentials = btoa("guest:guest")

function request(url, params, method = "GET") {
   let options = {
      method,
      headers: {
         "Authorization": `Basic ${encodedCredentials}`,
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
      throw new Error(res.statusText);
   }

   return res;
}

// Make Kinvey URL

function makeUrl(kinveyModule, endpoint) {
   const baseUrl = "https://baas.kinvey.com";
   const appKey = "kid_SJdvxzf3r";

   return `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;
}

// CRUD operations

function get(kinveyModule, endpoint) {
   const url = makeUrl(kinveyModule, endpoint);
   return request(url);
}

function create(kinveyModule, endpoint, params) {
   const url = makeUrl(kinveyModule, endpoint);
   return request(url, params, "POST");
}

function update(kinveyModule, endpoint, params) {
   const url = makeUrl(kinveyModule, endpoint);
   return request(url, params, "PUT");
}

function remove(kinveyModule, endpoint) {
   const url = makeUrl(kinveyModule, endpoint);
   return request(url, undefined, "DELETE");
}

export default {
   get,
   create,
   update,
   remove
};