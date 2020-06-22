import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js";

function validation(title, description, imageURL) {
   if (title.length < 6) {
      Shared.displayError("The title should be at least 6 characters long.");
      Shared.clearAllFields();

      return false;
   }

   if (description.length < 10) {
      Shared.displayError("The description should be at least 10 characters long.");
      Shared.clearAllFields();

      return false;
   }

   const imageRegex = /^((http|https):\/\/)/gim;
   if (!imageRegex.test(imageURL)) {
      Shared.clearAllFields();
      Shared.displayError("The image should start with 'http://' or 'https://'");
      return false;
   }

   return true;
}

export function getCreate(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/others/create.hbs");
}

export function postCreate(ctx) {
   Info.getStorageInfo(ctx);
   const { title, description, imageURL } = ctx.params;

   if (validation(title, description, imageURL)) {
      const data = {
         title,
         description,
         imageURL,
         creator: Storage.getData("username"),
         likes: 0,
         comments: []
      }

      Shared.displayLoading(true);
      Fetch.post("appdata", "ideas", data)
         .then(() => {
            Shared.displayLoading(false);
            Shared.displaySuccess("Trek created successfully.");

            ctx.redirect("#/dashboard");
         })
         .catch(console.error);
   }
}

export function getDetails(ctx) {
   Info.getStorageInfo(ctx)
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.get("appdata", `ideas/${id}`)
      .then(data => {
         Shared.displayLoading(false);
         ctx.idea = data;

         if (ctx.userId === data._acl.creator) {
            ctx.isCreator = true;
         }

         this.loadPartials(Info.getPartials())
            .partial("./templates/others/details.hbs");
      })
      .catch(console.error);
}

export function deleteDetails(ctx) {
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.del("appdata", `ideas/${id}`)
      .then(() => {
         Shared.displayLoading(false);
         Shared.displaySuccess("Idea deleted successfully.");

         ctx.redirect("#/dashboard");
      })
      .catch(console.error);
}

export function likeIdea(ctx) {
   const { id } = ctx.params;

   Shared.displayLoading(true);

   Fetch.get("appdata", `ideas/${id}`)
      .then(data => {
         data.likes++;

         Fetch.put("appdata", `ideas/${id}`, data)
            .then(() => {
               Shared.displayLoading(false);
               Shared.displaySuccess("You liked this idea successfully.");

               ctx.redirect(`#/details/${id}`);
            })
            .catch(console.error);
      })
      .catch(console.error);
}

export function postComment(ctx) {
   const { id, newComment } = ctx.params;
   Shared.displayLoading(true);

   Fetch.get("appdata", `ideas/${id}`)
      .then(data => {
         const comment = {
            user: Storage.getData("username"),
            comment: newComment
         }

         data.comments.push(comment);

         Fetch.put("appdata", `ideas/${id}`, data)
            .then(() => {
               Shared.displayLoading(false);
               Shared.displaySuccess("You comment successfully.");

               ctx.redirect(`#/details/${id}`);
            })
            .catch(console.error);
      })
      .catch(console.error);
}

export function getDashboard(ctx) {
   Info.getStorageInfo(ctx);
   const partials = Info.getPartials();

   if (ctx.loggedIn) {
      Fetch.get("appdata", "ideas")
         .then(data => {
            data.sort((a, b) => b.likes - a.likes);
            ctx.ideas = data

            this.loadPartials(partials)
               .partial("./templates/dashboard/dashboard.hbs");
         });
   }
}