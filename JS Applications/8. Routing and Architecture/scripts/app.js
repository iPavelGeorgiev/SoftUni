import Fetch from "./requester.js";
import Storage from "./storage.js";

(function () {
   const partials = {
      header: "./templates/common/header.hbs",
      footer: "./templates/common/footer.hbs"
   }

   const app = Sammy("#main", function () {
      this.use('Handlebars', 'hbs');

      this.get("index.html", function (ctx) {
         ctx.redirect("#/home");
      });

      this.get("#/home", function (ctx) {
         getStorageInfo(ctx);

         this.loadPartials(partials).then(function () {
            this.partial("./templates/home/home.hbs");
         });
      });

      this.get("#/about", function (ctx) {
         getStorageInfo(ctx);

         this.loadPartials(partials).then(function () {
            this.partial("./templates/about/about.hbs");
         });
      });

      this.get("#/login", function (ctx) {
         partials["loginForm"] = "./templates/login/loginForm.hbs";
         this.loadPartials(partials).then(function () {
            this.partial("./templates/login/loginPage.hbs");
         });
      });

      this.post("#/login", function (ctx) {
         const { username, password } = ctx.params;

         Fetch.post("user", "login", { username, password })
            .then(userInfo => {
               console.log(userInfo);
               Storage.saveUser(userInfo);
               ctx.redirect("#/home");
            })
            .catch(console.error)
      })

      this.get("#/logout", function (ctx) {
         Storage.removeUser();
         ctx.redirect("#/home");
      })

      this.get("#/register", function (ctx) {
         partials["registerForm"] = "./templates/register/registerForm.hbs";
         this.loadPartials(partials).then(function () {
            this.partial("./templates/register/registerPage.hbs");
         });
      });

      this.post("#/register", function (ctx) {
         const { username, password, repeatPassword } = ctx.params;

         if (password === repeatPassword) {
            Fetch.post("user", "", { username, password, hasNoTeam: true })
               .then(data => {
                  ctx.redirect("#/login");
               })
               .catch(console.error)
         } else {
            alert("The passwords you entered do not match!");
         }
      })

      this.get("#/catalog", function (ctx) {
         getStorageInfo(ctx);
         partials["team"] = "./templates/catalog/team.hbs";

         Fetch.get("appdata", "teams")
            .then(data => {
               ctx.teams = data;

               this.loadPartials(partials).then(function () {
                  this.partial("./templates/catalog/teamCatalog.hbs");
               });
            })
            .catch(console.error);
      })

      this.get("#/create", function (ctx) {
         getStorageInfo(ctx);
         partials["createForm"] = "./templates/create/createForm.hbs";

         this.loadPartials(partials).then(function () {
            this.partial("./templates/create/createPage.hbs");
         })
      })

      this.post("#/create", function (ctx) {
         const { name, comment } = ctx.params;
         const user = localStorage.getItem("username");
         const userId = localStorage.getItem("userId");

         Fetch.put("user", userId, { hasNoTeam: false })
            .then(userInfo => {
               Storage.removeUser()
               Storage.saveUser(userInfo);
            })
            .catch(console.error);
            
         const members = [{"username": localStorage.getItem("username")}];

         const data = {
            name,
            comment,
            members,
            author: userId
         }


         Fetch.post("appdata", "teams", data)
            .then(data => {
               ctx.redirect("#/catalog");
            })
            .catch(console.error);

      })

      this.get("#/catalog/:teamId", function (ctx) {
         getStorageInfo(ctx);
         const id = ctx.params.teamId;
         partials["teamMember"] = "./templates/catalog/teamMember.hbs";
         partials["teamControls"] = "./templates/catalog/teamControls.hbs";

         Fetch.get("appdata", `teams/${id}`)
            .then(teamInfo => {
               console.log(teamInfo);
               ctx.name = teamInfo.name;
               ctx.comment = teamInfo.comment;
               ctx.teamId = teamInfo._id;
               ctx.isAuthor = teamInfo.author === localStorage.getItem("userId");
               ctx.members = teamInfo.members;
               ctx.isOnTeam = teamInfo.members.some(m => m === localStorage.getItem("username"))
               console.log(teamInfo.members);

               this.loadPartials(partials).then(function () {
                  this.partial("./templates/catalog/details.hbs");
               })
            })
            .catch(console.error);
      })

      // Functions
      function getStorageInfo(ctx) {
         ctx.hasNoTeam = localStorage.getItem("hasNoTeam") === "true";
         ctx.username = localStorage.getItem("username");
         ctx.loggedIn = localStorage.getItem("authtoken") !== null;
      }
   });

   app.run();
}())