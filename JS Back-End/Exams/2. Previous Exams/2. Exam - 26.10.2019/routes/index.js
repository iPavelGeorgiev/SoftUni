const controllers = require("../controllers/index");
const userRouter = require("./user");
const expenseRouter = require("./expense");
const profileRouter = require("./profile");
const auth = require("../utils/auth");

module.exports = (app) => {

   app.get("/", auth(), controllers.other.get.home);
   app.post("/", auth(), controllers.user.post.refill);

   app.use(userRouter);

   app.use(expenseRouter);

   app.use(profileRouter);

   app.all("*", auth(), controllers.other.get.notFound)
};