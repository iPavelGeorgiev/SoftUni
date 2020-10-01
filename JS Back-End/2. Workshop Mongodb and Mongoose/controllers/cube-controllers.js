const { CubeModel } = require("../models/index");

module.exports = {
    get: {
        details: async function (req, res, next) {
            try {
                const { id } = req.params;
                const cube = await CubeModel.findById(id).populate("accessories");

                res.render("details", {
                    title: "Details | Cube Workshop",
                    cube
                });
            } catch (err) {
                res.redirect("/not-found");
                next(err);
            }
        },
        create: function (req, res) {
            res.render("create", { title: "Create Cube | Cube Workshop" });
        }
    },
    post: {
        create: async function (req, res, next) {
            try {
                const { name, description, imageUrl, difficulty } = req.body;
                await CubeModel.create({ name, description, imageUrl, difficulty });
                
                console.log("Cube is successfully created");
                res.redirect("/create");
            } catch (err) {
                next(err);
            }
        }
    }
}