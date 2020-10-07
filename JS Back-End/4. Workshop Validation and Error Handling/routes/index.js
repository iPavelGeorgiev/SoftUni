const controllers = require("../controllers/index");
const cubeRouter = require("./cube");
const userRouter = require("./user");
const accessoryRouter = require("./accessory");
const auth = require("../utils/auth");

module.exports = (app) => {

   app.get("/", auth(true), controllers.other.get.home)
   
   app.use(cubeRouter);

   app.use(accessoryRouter);

   app.use(userRouter);

   app.get("/about", auth(true), controllers.other.get.about)

   app.all("*", auth(true), controllers.other.get.notFound)
};