import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js"

export function getLogin(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/auth/login.hbs");
}

export function postLogin(ctx) {
   const { username, password } = ctx.params;
   Shared.displayLoading(true);

   Fetch.post("user", "login", { username, password})
      .then(userInfo => {
         Shared.displayLoading(false);
         Shared.displaySuccess("You successfully logged in!");

         Storage.saveUser(userInfo);
         ctx.redirect("#/home");
      })
      .catch(() => {
         Shared.displayError("Incorrect username or password!");
         Shared.clearAllFields();
      });
}

export function getRegister(ctx) {
   Info.getStorageInfo(ctx);
   
   this.loadPartials(Info.getPartials())
      .partial("./templates/auth/register.hbs");
}

export function postRegister(ctx) {
   const { username, password, rePassword} = ctx.params;
   console.log(password);
   console.log(rePassword);
   if (username.length < 3) {
      Shared.clearAllFields();
      return Shared.displayError("The username should be at least 3 characters long!");
   }

   if (password.length < 6) {
      Shared.clearAllFields();
      return Shared.displayError("The password should be at least 6 characters long!");
   }

   if (password !== rePassword) {
      Shared.clearAllFields();
      return Shared.displayError("The repeat password should be equal to the password!");
   }

   const data = {
      username,
      password,
      ownEvents: 0
   }
   
   Shared.displayLoading(true);

   Fetch.post("user", "", data)
      .then(data => {
         Shared.displayLoading(false);
         Shared.displaySuccess("you successfully registered");

         Storage.saveUser(data);
         ctx.redirect("#/home");
      })
      .catch(console.error);
}