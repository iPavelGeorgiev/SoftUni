import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js"

export function getLogin(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/user/login.hbs");
}

export function postLogin(ctx) {
   Info.getStorageInfo(ctx);
   const { username, password } = ctx.params;
   Shared.displayLoading(true);

   Fetch.post("user", "login", { username, password })
      .then(userInfo => {
         Shared.displayLoading(false);
         Shared.displaySuccess("Successfully logged user.");

         Storage.saveUser(userInfo);
         ctx.redirect("#/home");
      })
      .catch(() => {
         Shared.displayError("Invalid credentials. Please retry your request with correct credentials.");
         Shared.clearAllFields();
      });
}

export function getLogout(ctx) {
   Shared.displayLoading(true);

   Fetch.post("user", "_logout")
      .then(() => {
         Shared.displayLoading(false);
         Shared.displaySuccess("Logout successful.");

         Storage.clearData();
         ctx.redirect("#/home");
      });
}

export function getRegister(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/user/register.hbs");
}

export function postRegister(ctx) {
   Info.getStorageInfo(ctx);
   const { username, password, rePassword } = ctx.params;

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
   }

   Shared.displayLoading(true);

   Fetch.post("user", "", data)
      .then(data => {
         Shared.displayLoading(false);
         Shared.displaySuccess("Successfully logged user.");

         Storage.saveUser(data);
         ctx.redirect("#/home");
      })
      .catch(console.error);
}

export function getProfile(ctx) {
   Info.getStorageInfo(ctx);

   if (ctx.loggedIn) {
      Fetch.get('appdata', 'treks')
         .then(treks => {
            const myTreks = treks.filter(x => x.organizer === sessionStorage.getItem('username'));
            ctx.treks = myTreks;
            ctx.numberOfEvents = myTreks.length;

            this.loadPartials(Info.getPartials())
               .partial("./templates/user/profile.hbs");
         });
   } else {
      this.loadPartials(Info.getPartials())
         .partial("./templates/user/profile.hbs");
   }
}