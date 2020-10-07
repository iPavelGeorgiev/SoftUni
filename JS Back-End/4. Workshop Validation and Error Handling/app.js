const config = require('./config/config');
const express = require('express');
const app = express();

require("./config/database")(config.dbUrl);
require('./config/express')(app);
require("./routes/index")(app);

app.use(function (err, req, res, next) {
   res.status(500)
      .render('500.hbs', { errorMessage: err.message });
});

app.listen(config.port, console.log(`Server is up and running on port: ${config.port}`));