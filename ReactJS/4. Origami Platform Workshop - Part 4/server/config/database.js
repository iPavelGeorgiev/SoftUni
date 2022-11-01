const mongoose = require("mongoose");

const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
}

module.exports = (dbURL) => {
   return mongoose.connect(dbURL, options)
      .then(() => console.log("Connected to MongoDB"))
      .catch(err => console.error("Could not connect to MongoDB", err));
}