const controllers = require("../controllers/index");
const userRouter = require("./user");
const courseRouter = require("./course");
const auth = require("../utils/auth");

module.exports = (app) => {

   app.get("/", auth(), controllers.other.get.home);

   app.use(userRouter);

   app.use(courseRouter);

   app.all("*", auth(), controllers.other.get.notFound)
};