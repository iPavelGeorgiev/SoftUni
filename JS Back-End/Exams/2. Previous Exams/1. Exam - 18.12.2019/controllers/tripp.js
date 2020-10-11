const { TrippModel } = require("../models/index");
const { UserModel } = require("../models/index");
const { trippDetailsValidations, offerTrippValidations } = require("../utils/validations");

module.exports = {
   get: {
      sharedTripps: async function (req, res, next) {
         let noSharedTrips = true;

         try {
            const tripps = await TrippModel.find().lean()

            if (Array.isArray(tripps) && tripps.length > 0) {
               noSharedTrips = false;
            }

            res.render("sharedTripps", {
               title: "Shared Tripps",
               isLoggedIn: req.isLoggedIn,
               loggedEmail: req.loggedEmail,
               noSharedTrips,
               tripps
            });
         } catch (err) {
            next(err);
         }
      },
      offerTripp: function (req, res) {
         res.render("offerTripp", {
            title: "Offer Tripp",
            isLoggedIn: req.isLoggedIn,
            loggedEmail: req.loggedEmail,
            error: req.query.error
         })
      },
      details: async function (req, res, next) {
         const { id } = req.params;
         
         try {
            const tripp = await TrippModel.findById(id)
               .populate("driver")
               .populate("buddies", "email")
               .lean();
            
            const show = trippDetailsValidations(req, tripp);
            
            if (tripp.buddies.length > 0) {
               var buddies = tripp.buddies.reduce((accu, curr) => {
                  accu.push(curr.email);
                  return accu;
               }, [])
               .join(", ");
            }

            return res.render("tripp-details", {
               title: "Details",
               isLoggedIn: req.isLoggedIn,
               loggedEmail: req.loggedEmail,
               tripp,
               buddies,
               show
            })
         } catch (err) {
            next(err);
         }
      },
      close: async function (req, res, next) {
         const { id } = req.params;

         try {
            await TrippModel.deleteOne({_id: id});
            res.redirect("/shared-tripps");
         } catch (err) {
            next(err);
         }
      },
      join: async function (req, res, next) {
         const { id } = req.params;

         try {
            await TrippModel.updateOne({_id: id}, {$addToSet: {buddies: req.userID}});
            await UserModel.updateOne({_id: req.userID}, {$addToSet: {trippHistory: id}});

            res.redirect("/shared-tripps");
         } catch (err) {
            next(err);
         }
      }
   },
   post: {
      offerTripp: async function (req, res, next) {
         const {
            startAndEndPoint,
            dateTime,
            carImage,
            seats,
            description
         } = req.body;

         const validate = offerTrippValidations(req);

         if (validate.status) {
            return res.redirect(`offer-tripp?error=${validate.message}`);
         }

         try {
            const [startPoint, endPoint] = startAndEndPoint.split(" - ");
            const [date, time] = dateTime.split(" - ");

            await TrippModel.create({
               startPoint,
               endPoint,
               date,
               time,
               seats,
               description,
               carImage,
               driver: req.userID
            });

            console.log("Tripp offer is successfully created");
            res.redirect("/shared-tripps");
         } catch (err) {
            next(err);
         }
      }
   }
}