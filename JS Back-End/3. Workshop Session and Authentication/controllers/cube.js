const { CubeModel } = require("../models/index");

module.exports = {
    get: {
        details: async function (req, res, next) {
            try {
                const { id } = req.params;
                const cube = await CubeModel.findById(id).populate("accessories");
                let isCreator = false;

                if (cube.creatorId == req.userId) {
                    isCreator = true;
                }

                res.render("details", {
                    title: "Details | Cube Workshop",
                    isCreator,
                    isLoggedIn: req.isLoggedIn,
                    cube
                });
            } catch (err) {
                res.redirect("/not-found");
                next(err);
            }
        },
        create: function (req, res) {
            res.render("create", {
                title: "Create Cube | Cube Workshop",
                isLoggedIn: req.isLoggedIn
            });
        },
        edit: async function (req, res, next) {
            const { id } = req.params;

            try {
                const cube = await CubeModel.findById({ _id: id, creatorId: req.userId });

                res.render("editCubePage", {
                    title: "Edit Cube | Cube Workshop",
                    isLoggedIn: req.isLoggedIn,
                    cube
                });
            } catch (err) {
                next(err);
            }
        },
        delete: async function (req, res, next) {
            const { id } = req.params;

            try {
                const cube = await CubeModel.findById({ _id: id, creatorId: req.userId });

                res.render("deleteCubePage", {
                    title: "Delete Cube | Cube Workshop",
                    isLoggedIn: req.isLoggedIn,
                    cube
                })
            } catch (err) {
                next(err);
            }
        }
    },
    post: {
        create: async function (req, res, next) {
            try {
                const { name, description, imageUrl, difficulty } = req.body;
                await CubeModel.create({ name, description, imageUrl, difficulty, creatorId: req.userId });

                console.log("Cube is successfully created");
                res.redirect("/create");
            } catch (err) {
                next(err);
            }
        },
        delete: async function (req, res, next) {
            const { id } = req.params;

            try {
                const cube = await CubeModel.findById({ _id: id, creatorId: req.userId });

                cube.remove();
                res.redirect("/");
            } catch (err) {
                next(err);
            }
        },
        edit: async function (req, res, next) {
            const { id } = req.params;
            const creatorId = req.userId;
            const cube = { ...req.body};

            try {
                await CubeModel.updateOne({ _id: id, creatorId }, { ...cube }, { runValidators: true })
                res.redirect(`/details/${id}`);
            } catch (err) {
                next(err);
            }
        }
    }
}