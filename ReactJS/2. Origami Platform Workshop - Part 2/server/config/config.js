const env = process.env.NODE_ENV || "development";
require("dotenv").config();

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: process.env.DB_CONNECTION,
        jwtSecret: process.env.JWT_SECRET,
        authCookieName: "x-auth-token"
    },
    production: {}
};

module.exports = config[env];