const { UserModel, CourseModel } = require("../models/index");

module.exports = {
   get: {
      home: async function (req, res, next) {
         try {
            let hasCourses = await CourseModel.find({ isPublic: true }).lean()

            if (req.isLoggedIn) {
               if (hasCourses) {
                  hasCourses.sort((a, b) => {
                     return new Date(b.date) - new Date(a.date)
                  });
               }

               res.render("user-home", {
                  title: "Video Tutorials",
                  isLoggedIn: req.isLoggedIn,
                  loggedUsername: req.loggedUsername,
                  hasCourses
               })
            } else {
               res.render("guest-home", {
                  title: "Video Tutorials",
                  isLoggedIn: req.isLoggedIn,
                  loggedUsername: req.loggedUsername
               });
            }
         } catch (err) {
            next(err)
         }
      },
      notFound: function (req, res) {
         console.log("NOT FOUND!");
         res.render("500", {
            title: "Page Not Found",
            isLoggedIn: req.isLoggedIn,
            loggedUsername: req.loggedUsername
         });
      }
   }
}