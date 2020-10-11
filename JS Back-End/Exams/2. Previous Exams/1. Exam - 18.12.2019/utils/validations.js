function trippDetailsValidations(req, tripp) {
   let show = {
      isDriver: false,
      alreadyJoined: false,
      notAvailable: false,
      availableSeats: false
   }

   if (tripp.driver._id.toString() == req.userID) {
      show.isDriver = true;
      return show;
   }

   if (JSON.stringify(tripp.buddies).includes(req.loggedEmail)) {
      show.alreadyJoined = true;
      return show;
   }

   if ((tripp.seats - tripp.buddies.length) > 0) {
      const seats = tripp.seats - tripp.buddies.length;
      show.availableSeats = seats;
      return show;
   }

   show.notAvailable = true;
   return show;
}

function registerValidations(req) {
   const user = { ...req.body };
   const error = { status: false };

   if (!user.email || !user.password || !user.rePassword) {
      error.status = true;
      error.message = "All fields must be filled!";
   }

   if (!error.status && !/^\S+@\S+$/.test(user.email)) {
      error.status = true;
      error.message = "The email must be in the following format (mailboxname @ domainname)";
   }

   if (!error.status && user.password !== user.rePassword) {
      error.status = true;
      error.message = "Your password and confirmation password do not match!";
   }

   if (!error.status && user.password < 6) {
      error.status = true;
      error.message = "Password must be at least 6 characters long!";
   }

   return error;
}

function offerTrippValidations(req) {
   const {
      startAndEndPoint,
      dateTime,
      carImage,
      seats,
      description
   } = req.body;

   const [startPoint, endPoint] = startAndEndPoint.split(" - ");
   const [date, time] = dateTime.split(" - ");

   const error = { status: false };

   if (!startAndEndPoint || !dateTime || !carImage || !seats || !description) {
      error.status = true;
      error.message = "All fields must be filled!";
      return error;
   }

   if (!startAndEndPoint.includes(" - ")) {
      error.status = true;
      error.message = "Starting Point and End Point must be separated with single space, dash and another single space (' - ')!";
      return error;
   }

   if (startPoint.length < 4 || endPoint.length < 4) {
      error.status = true;
      error.message = "Starting and end point must be at least 4 characters long (each)!";
      return error;
   }
   //
   if (!dateTime.includes(" - ")) {
      error.status = true;
      error.message = "Date and Time must be separated with single space, dash and another single space (' - ')!";
      return error;
   }

   if (date.length < 6 || time.length < 6) {
      error.status = true;
      error.message = "Date and time must be at least 6 characters long (each)!";
      return error;
   }

   if (!/^http[s]?:\/\/.+/gi.test(carImage)) {
      error.status = true;
      error.message = "The Car Image url must start with http:// or https://!";
      return error;
   }

   if (seats <= 0) {
      error.status = true;
      error.message = "The Seats should be positive number!";
      return error;
   }

   if (description.length < 10) {
      error.status = true;
      error.message = "The Description should be minimum 10 characters long!";
      return error;
   }

   return error;
}

module.exports = {
   trippDetailsValidations,
   registerValidations,
   offerTrippValidations
}