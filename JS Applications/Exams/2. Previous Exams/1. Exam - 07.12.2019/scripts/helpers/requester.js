const appKey = "kid_SJVXNC10B";
const appSecret = "48ce34847e3545259331b068792dfa8f";
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
   const authtoken = sessionStorage.getItem('authtoken');

   if (authtoken !== null) {
      return `Kinvey ${authtoken}`;
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