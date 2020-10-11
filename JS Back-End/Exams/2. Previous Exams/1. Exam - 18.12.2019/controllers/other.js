module.exports = {
   get: {
      home: function (req, res) {
         res.render("home", {
            title: "SharedTripp",
            isLoggedIn: req.isLoggedIn,
            loggedEmail: req.loggedEmail
         });
      },
      notFound: function (req, res) {
         res.render("404", {
            title: "Not Found",
            isLoggedIn: req.isLoggedIn,
            loggedEmail: req.loggedEmail
         });
      }
   }
}