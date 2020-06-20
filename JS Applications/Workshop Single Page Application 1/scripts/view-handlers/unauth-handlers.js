import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js"

export function getRegister(ctx) {
   Info.getStorageInfo(ctx)

   this.loadPartials(Info.getPartials())
      .partial("./templates/authentication/register.hbs");
}

export function postRegister(ctx) {
   const { firstName, lastName, username, password, repeatPassword } = ctx.params;

   if (firstName.length < 2 && lastName.length < 2) {
      $("input:text").val("");
      return alert("The first and last name should be at least 2 characters long!");
   }

   if (username.length < 3) {
      Shared.clearAllFields();
      return alert("The username should be at least 3 characters long!");
   }

   if (password.length < 6) {
      Shared.clearAllFields();
      return alert("The password should be at least 6 characters long!");
   }

   if (password !== repeatPassword) {
      Shared.clearAllFields();
      return alert("The repeat password should be equal to the password!");
   }

   const data = {
      firstName,
      lastName,
      username,
      password,
   }

   Fetch.post("user", "", data)
      .then(userInfo => {
         Storage.saveUser(userInfo);
         ctx.redirect("#/home");
      })
      .catch(console.error);
}

export function getLogin(ctx) {
   Info.getStorageInfo(ctx)

   this.loadPartials(Info.getPartials())
      .partial("./templates/authentication/login.hbs");
}

export function postLogin(ctx) {
   const { username, password } = ctx.params;

   Fetch.post("user", "login", { username, password })
      .then(userInfo => {
         Storage.saveUser(userInfo);
         ctx.redirect("#/home");
      });
}