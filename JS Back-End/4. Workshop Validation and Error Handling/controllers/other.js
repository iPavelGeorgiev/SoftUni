const { CubeModel } = require("../models/index");

module.exports = {
   get: {
      home: async function (req, res, next) {
         const { from, to, search } = req.query;

         let query = {};
         if (search) {
            query = { ...query, name: { $regex: search, $options: "i" } };
         }

         if (to) {
            query = { ...query, difficulty: { $lte: +to } };
         }

         if (from) {
            query = {
               ...query,
               difficulty: { ...query.difficulty, $gte: +from }
            }
         }

         try {
            let cubes = await CubeModel.find(query);
            let isEmpty = true;

            if (Array.isArray(cubes) && cubes.length > 0) {
               isEmpty = false;
            }

            res.render("home", {
               title: "Cube Workshop",
               isLoggedIn: req.isLoggedIn,
               cubes,
               isEmpty
            });
         } catch (err) {
            next(err);
         }
      },
      about: function (req, res) {
         res.render('about', {
            title: "About | Cube Workshop",
            isLoggedIn: req.isLoggedIn
         });
      },
      notFound: function (req, res) {
         res.render('404', {
            title: "#404 | Cube Workshop",
            isLoggedIn: req.isLoggedIn
         });
      }
   }
}