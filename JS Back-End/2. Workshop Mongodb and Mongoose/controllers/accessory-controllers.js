const { CubeModel, AccessoryModel } = require("../models/index");

module.exports = {
   get: {
      create: function (req, res) {
         res.render("createAccessory", { title: "Create Accessory | Cube Workshop" });
      },
      attach: async function (req, res, next) {
         try {
            const { id: cubeId } = req.params;
            const cube = await CubeModel.findById(cubeId);
            const accessories = await AccessoryModel.find({ cubes: { $nin: cubeId } });

            res.render("attachAccessory", {
               title: "Attach Accessory | Cube Workshop",
               cube,
               accessories: accessories.length > 0 ? accessories : null
            });
         } catch (err) {
            next(err);
         }
      }
   },
   post: {
      create: async function (req, res, next) {
         try {
            const { name, description, imageUrl } = req.body;
            await AccessoryModel.create({ name, description, imageUrl });

            console.log("Accessory is successfully created");
            res.redirect("/create/accessory");
         } catch (err) {
            next(err);
         }
      },
      attach: async function (req, res, next) {
         try {
            const { id: cubeId } = req.params;
            const { accessory: accessoryId } = req.body;

            await CubeModel.updateOne({_id: cubeId}, {$addToSet: {accessories: accessoryId}});
            await AccessoryModel.updateOne({_id: accessoryId}, {$addToSet: {cubes: cubeId}});

            console.log("Accessory is successfully attached");
            res.redirect(`/attach/accessory/${cubeId}`);
         } catch (err) {
            next(err);
         }
      }
   }
}