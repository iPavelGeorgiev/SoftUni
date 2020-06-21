import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js";

function validation(name, dateTime, description, imageURL) {
   if (name < 6) {
      Shared.clearAllFields();
      Shared.displayError("The event name should be at least 6 characters long!");
      return false;
   }

   const dateRegex = /^\d+ [A-Za-z]+; \d+ [A-Za-z]+ - \d+ (PM|AM);*/gim
   if (!dateRegex.test(dateTime)) {
      Shared.clearAllFields();
      Shared.displayError("The date should be in string format (24 February; 24 March - 10 PM!");
      return false;
   }

   if (description.length < 10) {
      Shared.clearAllFields();
      Shared.displayError("The description should be at least 10 characters long!");
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

export function getLogout(ctx) {
   Shared.displayLoading(true);

   Fetch.post("user", "_logout")
      .then(() => {
         Shared.displayLoading(false);
         Shared.displaySuccess("You successfully logout!");

         Storage.clearData();
         ctx.redirect("#/home");
      });
}

export function getOrganize(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/events/organize-event.hbs");
}

export function postOrganize(ctx) {
   Info.getStorageInfo(ctx);
   const { name, dateTime, description, imageURL } = ctx.params;

   if (validation(name, dateTime, description, imageURL)) {
      Shared.displayLoading(true);

      // user
      Fetch.get("user", ctx.userId)
         .then(userInfo => {
            userInfo.ownEvents = userInfo.ownEvents + 1;

            Fetch.put("user", ctx.userId, userInfo)
               .catch(console.error);
         })
         .catch(console.error);

      // appdata
      const data = {
         name,
         dateTime,
         description,
         imageURL,
         peopleInterestedIn: 0,
         organizer: ctx.username
      }

      Fetch.post("appdata", "events", data)
         .then(() => {
            Shared.displayLoading(false);
            Shared.displaySuccess("You successfully organized new event!");
            Shared.clearAllFields();
         })
         .catch(console.error);
   }
}

export function getEventDetails(ctx) {
   Info.getStorageInfo(ctx);
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.get("appdata", `events/${id}`)
      .then(eventDetails => {
         Shared.displayLoading(false);

         if (eventDetails._acl.creator === ctx.userId) {
            ctx.creator = true;
         }

         ctx.event = eventDetails;
         this.loadPartials(Info.getPartials())
            .partial("./templates/events/details.hbs");
      })
      .catch(console.error);
}

export function getEdit(ctx) {
   Info.getStorageInfo(ctx);
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.get("appdata", `events/${id}`)
      .then(eventInfo => {
         Shared.displayLoading(false);
         ctx.event = eventInfo;

         this.loadPartials(Info.getPartials())
            .partial("./templates/events/edit.hbs");
      })
}

export function postEdit(ctx) {
   const { id, name, dateTime, description, imageURL } = ctx.params;
   console.log(id);
   if (validation(name, dateTime, description, imageURL)) {
      Shared.displayLoading(true);

      Fetch.get("appdata", `events/${id}`)
         .then(eventDetails => {
            const data = {
               name,
               dateTime,
               description,
               imageURL,
               peopleInterestedIn: eventDetails.peopleInterestedIn,
               organizer: eventDetails.organizer
            }

            Fetch.put("appdata", `events/${id}`, data)
               .then(() => {
                  console.log(eventDetails);
                  Shared.displayLoading(false);
                  Shared.displaySuccess("You successfully edited your event!");

                  ctx.redirect(`#/details/${id}`);
               })
               .catch(console.error);
         })
         .catch(console.error);
   }

}

export function deletePost(ctx) {
   const { id } = ctx.params;

   Shared.displayLoading(true);

   Fetch.del("appdata", `events/${id}`)
      .then(() => {
         Shared.displayLoading(false);
         ctx.redirect("#/home");
      })
      .catch(console.error);
}

export function joinEvent(ctx) {
   const { id } = ctx.params;

   Shared.displayLoading(true);
   Fetch.get("appdata", `events/${id}`)
      .then(data => {
         data.peopleInterestedIn++;

         Fetch.put("appdata", `events/${id}`, data)
            .then(() => {
               Shared.displayLoading(false);
               Shared.displaySuccess("You joined the event successfully!");

               ctx.redirect(`#/details/${id}`);
            })
            .catch(console.error);
      })
      .catch(console.error);
}

function getProfile(ctx) {
   Info.getStorageInfo(ctx);

   Shared.displaySuccess(true);
   Fetch.get("appdata", "events")
      .then(data => {
         const userData = data.filter(x => x.creator === ctx.username)

         ctx.event = userData
         this.loadPartials(Info.loadPartials())
            .partial("./templates/auth/profile.hbs")
      })
}