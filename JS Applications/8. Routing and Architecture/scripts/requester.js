const appKey = "kid_r1Ww3kAnB";
const appSecret = "38aa0c9f2d124f208951658e499e77d8";
const baseUrl = "https://baas.kinvey.com";

function handleError(response) {
   if (!response.ok && response.status !== 401) {
      throw new Error(response.status);
   }
   
   return response;
}
function deserializeData(response) {
   if (response["url"].includes("logout") || response.status === 204) {
      return response;
   }

   return response.json();
}

function makeAuthString() {
   // basic for users
   // kinvey for collections
   const authtoken = localStorage.getItem('authtoken');

   if (authtoken !== null) {
      return `Kinvey ${localStorage.getItem('authtoken')}`;
   }

   return `Basic ${btoa(`${appKey}:${appSecret}`)}`;
}

function makeHeaders(httpMethod, data) {
   const authString = makeAuthString();
   const headers = {
      method: httpMethod,
      headers: {
         "Authorization": authString,
         "Content-type": "application/json"
      }
   }
   if (httpMethod === "POST" || httpMethod === "PUT") {
      headers.body = JSON.stringify(data);
   }

   return headers;
}

function makeRequest(httpMethod, kinveyModule, endpoint, data) {
   const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;
   const headers = makeHeaders(httpMethod, data);

   return fetch(url, headers)
      .then(handleError)
      .then(deserializeData)
}

const get = makeRequest.bind(undefined, "GET");
const post = makeRequest.bind(undefined, "POST");
const put = makeRequest.bind(undefined, "PUT");
const del = makeRequest.bind(undefined, "DELETE");

export default {
   get,
   post,
   put,
   del
}