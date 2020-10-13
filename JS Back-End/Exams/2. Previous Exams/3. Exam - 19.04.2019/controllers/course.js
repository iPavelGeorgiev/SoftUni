const { UserModel, CourseModel } = require("../models/index");
const { courseValidations, courseDetailsValidations } = require("../utils/validations");

module.exports = {
   get: {
      create: function (req, res) {
         res.render("create-course", {
            title: "Create Course",
            isLoggedIn: req.isLoggedIn,
            loggedUsername: req.loggedUsername
         });
      },
      details: async function (req, res, next) {
         const { id } = req.params;

         try {
            const course = await CourseModel.findById(id)
               .populate("enrolledUsers")
               .lean();

            const show = courseDetailsValidations(req, course)

            console.log(course);
            res.render("course-details", {
               title: "Course Details",
               isLoggedIn: req.isLoggedIn,
               loggedUsername: req.loggedUsername,
               course,
               show
            })
         } catch (err) {
            next(err);
         }
      }
   },
   post: {
      create: async function (req, res, next) {
         const { title, description, imageUrl, isPublic } = req.body;
         const validate = courseValidations(req);

         if (validate.status) {
            res.status(404);
            return res.render("create-course", {
               title: "Create Course",
               isLoggedIn: req.isLoggedIn,
               loggedUsername: req.loggedUsername,
               error: validate.message
            });
         }

         const date = new Date()
            .toString()
            .split(" ")
            .slice(0, 5)
            .join(" ");

         try {
            const course = await CourseModel.create({
               title,
               description,
               imageUrl,
               date,
               isPublic: isPublic == "on" ? true : false,
               creator: req.userID
            });

            await UserModel.updateOne({ _id: req.userID }, { $addToSet: { createdCourses: course._id } });

            console.log("Course is successfully created");
            res.redirect("/");
         } catch (err) {
            next(err);
         }
      }
   }
}

// search: async function (req, res, next) {
//    try {
//       const { search } = req.body
//       const courses = await courseModel.find({ isPublic: true, title: { $regex: `.*${search}.*`, $options: 'i' } }).lean()
//       res.render('home', {
//          title: "Video Tutorials",
//          isLoggedIn: req.isLoggedIn,
//          loggedUsername: req.loggedUsername,
//          courses
//       });
//    } catch (error) {
//       next(error)
//    }
// }