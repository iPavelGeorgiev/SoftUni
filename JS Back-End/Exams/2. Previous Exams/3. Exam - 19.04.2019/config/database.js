const mongoose = require("mongoose");

const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
}

module.exports = (dbUrl) => {
   return mongoose.connect(dbUrl, options)
      .then(() => console.log("Connected to MongoDB"))
      .catch(err => console.error("Could not connect to MongoDB", err));
}