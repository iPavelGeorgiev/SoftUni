function saveData(key, value) {
   localStorage.setItem(key, value);
}

function getData(key) {
   return localStorage.getItem(key);
}

function saveUser(data) {
   saveData("username", data.username);
   saveData("authtoken", data._kmd.authtoken);
   saveData("userId", data._id);
   saveData("hasNoTeam", data.hasNoTeam);
}

function removeUser() {
   localStorage.removeItem("username");
   localStorage.removeItem("authtoken");
   localStorage.removeItem("userId");
   localStorage.removeItem("hasNoTeam");
}

export default {
   getData,
   saveUser,
   removeUser
};