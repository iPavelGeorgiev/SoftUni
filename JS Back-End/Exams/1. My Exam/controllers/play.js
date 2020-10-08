const { UserModel, PlayModel } = require("../models/index");
const { playValidations, playDetailsValidations } = require("../utils/validations");

module.exports = {
   get: {
      create: function (req, res) {
         res.render("create-theater", {
            title: "Create Theater",
            isLoggedIn: req.isLoggedIn
         });
      },
      details: async function (req, res, next) {
         const { id } = req.params;

         try {
            const play = await PlayModel.findById(id)
               .populate("usersLiked")
               .lean();

            const show = playDetailsValidations(req, play)

            res.render("theater-details", {
               title: "Theater Details",
               isLoggedIn: req.isLoggedIn,
               play,
               show
            })
         } catch (err) {
            next(err);
         }
      },
      like: async function (req, res, next) {
         const { id } = req.params;

         try {
            await PlayModel.updateOne({ _id: id }, { $addToSet: { usersLiked: req.userID } });
            await UserModel.updateOne({ _id: req.userID }, { $addToSet: { likedPlays: id } });

            res.redirect("/");
         } catch (err) {
            next(err);
         }
      },
      delete: async function (req, res, next) {
         const playID = req.params.id;
         const userID = req.userID;

         try {
            await PlayModel.deleteOne({ "_id": playID });
            await UserModel.updateOne({ "_id": userID }, { $pull: { "likedPlays": playID } });

            res.redirect("/");
         } catch (err) {
            next(err);
         }
      },
      edit: async function (req, res, next) {
         const { id } = req.params;
         const error = req.query.error;

         try {
            const play = await PlayModel.findById(id).lean();
            const checkedPublic = play.isPublic ? 'checked' : '';

            res.render("edit-theater", {
               title: "Edit Theater",
               isLoggedIn: req.isLoggedIn,
               play,
               checkedPublic,
               error
            })

         } catch (err) {
            next(err)
         }
      }
   },
   post: {
      create: async function (req, res, next) {
         const { title, description, imageUrl, isPublic } = req.body;
         const validate = playValidations(req);

         if (validate.status) {
            res.status(404);
            return res.render("create-theater", {
               title: "Create Theater",
               isLoggedIn: req.isLoggedIn,
               error: validate.message
            });
         }

         const date = new Date()
            .toString()
            .split(" ")
            .slice(0, 5)
            .join(" ");

         try {
            const course = await PlayModel.create({
               title,
               description,
               imageUrl,
               date,
               isPublic: isPublic == "on" ? true : false,
               creator: req.userID
            });

            // await UserModel.updateOne({ _id: req.userID }, { $addToSet: { createdCourses: course._id } });

            console.log("Play is successfully created");
            res.redirect("/");
         } catch (err) {
            next(err);
         }
      },
      edit: async function(req, res, next) {
         const { id } = req.params;
         const {
             title,
             imageUrl,
             isPublic,
             description
         } = req.body;

         const validate = playValidations(req);

         if (validate.status) {
            return res.redirect(`/edit/${id}?error=${validate.message}`);
         }

         try {
            await PlayModel.findByIdAndUpdate(id, {
               title:title,
               imageUrl:imageUrl,
               description:description,
               isPublic: isPublic == "on" ? true : false
            })

            res.redirect('/');
        } catch (err) {
            next(err)
        }
      }
   }
}