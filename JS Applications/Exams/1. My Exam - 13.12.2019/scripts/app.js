import * as homeControllers from "./view-handlers/home-controller.js";
import * as userControllers from "./view-handlers/user-controller.js";
import * as otherControllers from "./view-handlers/other-controller.js";

(function () {
   const app = Sammy("#rooter", function () {
      this.use('Handlebars', 'hbs');

      this.get("/", homeControllers.redirectHome);
      this.get("index.html", homeControllers.redirectHome);
      this.get("#/home", homeControllers.getHome);
      this.get("#/dashboard", otherControllers.getDashboard)

      this.get("#/register", userControllers.getRegister);
      this.post("#/register", userControllers.postRegister);
      this.get("#/login", userControllers.getLogin);
      this.post("#/login", userControllers.postLogin);
      this.get("#/logout", userControllers.getLogout);

      this.get("#/create", otherControllers.getCreate);
      this.post("#/create", otherControllers.postCreate);
      this.get("#/details/:id", otherControllers.getDetails);
      this.get("#/delete/:id", otherControllers.deleteDetails);
      this.get("#/like/:id", otherControllers.likeIdea);
      this.post("#/comment/:id", otherControllers.postComment);
      this.get("#/profile/:id", userControllers.getProfile);
   })

   app.run();
}())