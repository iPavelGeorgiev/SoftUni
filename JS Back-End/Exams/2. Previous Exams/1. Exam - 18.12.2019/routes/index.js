const controllers = require("../controllers/index");
const userRouter = require("./user");
const trippRouter = require("./tripp");
const auth = require("../utils/auth");

module.exports = (app) => {

   app.get("/", auth(), controllers.other.get.home);

   app.use(userRouter);

   app.use(trippRouter);

   app.all("*", auth(), controllers.other.get.notFound)
};