const controllers = require("../controllers/index");
const cubeRouter = require("./cubes-router");
const accessoryRouter = require("./accessory-router");

module.exports = (app) => {

   app.get("/", controllers.other.get.home)
   
   app.use(cubeRouter);

   app.use(accessoryRouter);

   app.get("/about", controllers.other.get.about)

   app.all("*", controllers.other.get.notFound)
};