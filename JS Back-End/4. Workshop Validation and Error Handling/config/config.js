const env = process.env.NODE_ENV || "development";
require("dotenv").config();

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbUrl: process.env.DB_CONNECTION,
        jwtSecret: process.env.JWT_SECRET,
        cookie: "aid"
    },
    production: {}
};

module.exports = config[env];