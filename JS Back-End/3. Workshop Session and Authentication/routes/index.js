const controllers = require("../controllers/index");
const cubeRouter = require("./cube");
const userRouter = require("./user");
const accessoryRouter = require("./accessory");
const { getUserStatus } = require("../utils/auth");

module.exports = (app) => {

   app.get("/", getUserStatus, controllers.other.get.home)
   
   app.use(cubeRouter);

   app.use(accessoryRouter);

   app.use(userRouter);

   app.get("/about", getUserStatus, controllers.other.get.about)

   app.all("*", getUserStatus, controllers.other.get.notFound)
};