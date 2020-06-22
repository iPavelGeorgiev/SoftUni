export function getStorageInfo(ctx) {
   ctx.username = sessionStorage.getItem("username");
   ctx.fullName = sessionStorage.getItem("fullName");
   ctx.userId = sessionStorage.getItem("userId");
   ctx.loggedIn = sessionStorage.getItem("authtoken") !== null;
}

export function getPartials() {
   return {
      header: "./templates/common/header.hbs",
      footer: "./templates/common/footer.hbs"
   }
}

export function getTemplate(ctx, path) {
   ctx.loadPartials(getPartials())
       .partial(path);
}

export default {
   getStorageInfo,
   getPartials,
   getTemplate
}