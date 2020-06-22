function saveData(key, value) {
   sessionStorage.setItem(key, value);
}

function getData(key) {
   return sessionStorage.getItem(key);
}

function saveUser(data) {
   saveData("username", data.username);
   saveData("authtoken", data._kmd.authtoken);
   saveData("userId", data._id);
   saveData("fullName", `${data.firstName} ${data.lastName}`);
}

function clearData() {
   sessionStorage.clear();
}

export default {
   getData,
   saveUser,
   clearData
};