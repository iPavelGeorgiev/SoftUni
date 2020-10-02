const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require("path");
const { renderDifficultyLevel } = require("../utils/hbs-helpers")

module.exports = (app) => {
    // view engine setup
    app.engine("hbs", hbs({
        extname: "hbs",
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "..", "views/layouts"),
        partialsDir: path.join(__dirname, "..", "views/partials"),

        // create custom helper
        helpers: {
            renderDifficultyLevel
        }
    }));

    app.set("views", path.join(__dirname, "..", "views"));
    app.set("view engine", "hbs");

    // body parser setup
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // cookie parser setup
    app.use(cookieParser());

    // static files setup
    app.use(express.static(path.join(__dirname, "..", "static")));
};