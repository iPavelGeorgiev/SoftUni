const config = require('./config/config');
const express = require('express');
const app = express();

require("./config/database")(config.dbUrl);
require('./config/express')(app);
require("./routes/index")(app);

app.use(function (err, req, res, next) {
   console.log("");
   console.log("-".repeat(90));
   console.error(err);
   res.status(500).send(err.message);
   console.log("_".repeat(90));
});

app.listen(config.port, console.log(`Server is up and running on port: ${config.port}`));