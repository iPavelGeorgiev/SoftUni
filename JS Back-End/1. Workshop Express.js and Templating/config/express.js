const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require("path");

module.exports = (app) => {
    app.engine("hbs", hbs({
        extname: "hbs",
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "..", "views/layouts"),
        partialsDir: path.join(__dirname, "..", "views/partials")
    }));

    app.set("views", path.join(__dirname, "..", "views"));
    app.set("view engine", "hbs");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static(path.join(__dirname, "..", "static")));
};