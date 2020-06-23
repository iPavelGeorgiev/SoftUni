import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js";

function validation(location, description) {
   if (location.length < 6) {
      Shared.displayError("The trek name should be at least 6 characters long.");
      Shared.clearAllFields();

      return false;
   }

   if (description < 10) {
      Shared.displayError("The description should be at least 10 characters long.");
      Shared.clearAllFields();

      return false;
   }

   return true;
}

export function getRequest(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/others/request.hbs");
}

export function postRequest(ctx) {
   Info.getStorageInfo(ctx);
   const { location, dateTime, description, imageURL } = ctx.params;

   if (validation(location, description)) {
      const data = {
         location,
         dateTime,
         description,
         imageURL,
         organizer: Storage.getData("username"),
         likes: 0
      }

      Shared.displayLoading(true);
      Fetch.post("appdata", "treks", data)
         .then(() => {
            Shared.displayLoading(false);
            Shared.displaySuccess("Trek created successfully.");

            ctx.redirect("#/home");
         })
   }
}

export function getDetails(ctx) {
   Info.getStorageInfo(ctx)
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.get("appdata", `treks/${id}`)
      .then(data => {
         Shared.displayLoading(false);
         ctx.trek = data;

         if (ctx.userId === id) {
            ctx.isCreator = true;
         }

         this.loadPartials(Info.getPartials())
            .partial("./templates/others/details.hbs");
      })
      .catch(console.error);
}

export function getEdit(ctx) {
   Info.getStorageInfo(ctx);
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.get("appdata", `treks/${id}`)
      .then(data => {
         Shared.displayLoading(false);
         Shared.displaySuccess("Trek edited successfully.");
         ctx.trek = data;

         this.loadPartials(Info.getPartials())
            .partial("./templates/others/edit.hbs");
      })
      .catch(console.error);
}

export function getDelete(ctx) {
   const { id } = ctx.params;
   console.log(id);
   Shared.displayLoading(true);
   Fetch.del("appdata", `treks/${id}`)
      .then(() => {
         Shared.displayLoading(false);
         Shared.displaySuccess("You closed the trek successfully.");

         ctx.redirect("#/home");
      })
      .catch(console.error);
}

export function likeTrek(ctx) {
   const { id } = ctx.params;

   Shared.displayLoading(true);

   Fetch.get("appdata", `treks/${id}`)
      .then(data => {
         data.likes++;

         Fetch.put("appdata", `treks/${id}`, data)
            .then(() => {
               Shared.displayLoading(false);
               //Shared.displaySuccess("You liked the trek successfully.");

               ctx.redirect(`#/details/${id}`);
            })
            .catch(console.error);
      })
      .catch(console.error);
}