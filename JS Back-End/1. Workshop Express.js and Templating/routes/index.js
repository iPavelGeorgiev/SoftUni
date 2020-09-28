const { Router } = require("express");
const Cube = require("../models/cube");
const { getCube, getCubes} = require("../controllers/database");
const router = Router();

router.get("/", (req, res) => {
    getCubes((cubes) => {
        let isEmpty = true

        if (Array.isArray(cubes) && cubes.length > 0) {
            isEmpty = false;
        }

        res.render("index", {
            title: "Cube Workshop",
            cubes,
            isEmpty
        });
    })
})

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About | Cube Workshop"
    })
})

router.get("/create", (req, res) => {
    res.render("create");
})

router.post("/create", (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body

    const newCube = new Cube(name, description, imageUrl, difficultyLevel);
    newCube.save(() => {
        res.redirect("/");
    });
})

router.get("/details/:id", (req, res) => {
    const id = req.params.id;
    getCube(id, (cube) => {
        res.render("details", {
            description: "Details | Cube Workshop",
            ...cube
        })
    });
})

router.get("*", (req, res) => {
    res.render("404");
})

module.exports = router