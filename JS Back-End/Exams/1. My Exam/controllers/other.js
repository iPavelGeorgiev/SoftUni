const { UserModel, PlayModel } = require("../models/index");

module.exports = {
   get: {
      home: async function (req, res, next) {
         try {
            let hasPlays = await PlayModel.find({ isPublic: true }).lean();

            if (req.isLoggedIn) {
               if (hasPlays) {
                  hasPlays.sort((a, b) => {
                     return new Date(b.date) - new Date(a.date)
                  });

                  hasPlays.forEach((x, i) => {
                     const likes = x.usersLiked.length
                     hasPlays[i].likes = likes;
                  })
               }

               res.render("user-home", {
                  title: "Theater",
                  isLoggedIn: req.isLoggedIn,
                  hasPlays
               })
            } else {
               if (hasPlays) {
                  hasPlays.sort((a, b) => {
                     return b.usersLiked.length - a.usersLiked.length;
                  });

                  hasPlays = hasPlays.slice(0, 3);
               }

               res.render("guest-home", {
                  title: "Theater",
                  isLoggedIn: req.isLoggedIn,
                  hasPlays
               });
            }
         } catch (err) {
            next(err)
         }
      },
      sortDate: async function (req, res, next) {
         try {
            let hasPlays = await PlayModel.find({ isPublic: true }).lean();

            if (hasPlays) {
               hasPlays.sort((a, b) => {
                  return new Date(b.date) - new Date(a.date)
               });

               hasPlays.forEach((x, i) => {
                  const likes = x.usersLiked.length
                  hasPlays[i].likes = likes;
               })
            }

            res.render("user-home", {
               title: "Theater",
               isLoggedIn: req.isLoggedIn,
               hasPlays
            })
         } catch (err) {
            next(err);
         }
      },
      sortLikes: async function (req, res, next) {
         try {
            let hasPlays = await PlayModel.find({ isPublic: true }).lean();

            if (hasPlays) {
               hasPlays.sort((a, b) => {
                  return b.usersLiked.length - a.usersLiked.length;
               });

               hasPlays.forEach((x, i) => {
                  const likes = x.usersLiked.length
                  hasPlays[i].likes = likes;
               })
            }

            res.render("user-home", {
               title: "Theater",
               isLoggedIn: req.isLoggedIn,
               hasPlays
            })
         } catch (err) {
            next(err);
         }
      },
      notFound: function (req, res) {
         res.render("404", {
            title: "Not Found",
            isLoggedIn: req.isLoggedIn,
            loggedEmail: req.loggedEmail
         });
      }
   }
}