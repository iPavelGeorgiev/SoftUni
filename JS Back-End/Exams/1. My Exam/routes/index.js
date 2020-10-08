const controllers = require("../controllers/index");
const userRouter = require("./user");
const playRouter = require("./play");
const auth = require("../utils/auth");

module.exports = (app) => {

   app.get("/", auth(), controllers.other.get.home);
   app.get("/sort-date", auth(), controllers.other.get.sortDate);
   app.get("/sort-likes", auth(), controllers.other.get.sortLikes);

   app.use(userRouter);

   app.use(playRouter);

   app.all("*", auth(), controllers.other.get.notFound)
};