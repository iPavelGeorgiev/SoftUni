function registerValidations(req) {
   const user = { ...req.body };
   const error = { status: false };

   // Check for empty fields
   if (!user.username || !user.password || !user.repeatPassword) {
      error.status = true;
      error.message = "All fields must be filled!";
      return error;
   }
   
   // Username validations
   if (user.username.length < 5) {
      error.status = true;
      error.message = "Username must be at least 5 characters long!";
      return error;
   }

   if (!/^[A-Za-z0-9]+$/.test(user.username)) {
      error.status = true;
      error.message = "Username should consists English letters and digits only!";
      return error;
   }

   // Password validations
   if (user.password !== user.repeatPassword) {
      error.status = true;
      error.message = "Your password and confirmation password do not match!";
      return error;
   }

   if (user.password < 5) {
      error.status = true;
      error.message = "Password must be at least 5 characters long!";
      return error;
   }

   return error;
}

function courseValidations(req) {
   const { title, description, imageUrl} = req.body;
   const error = { status: false };

   // Check for empty fields
   if (!title || !description || !imageUrl) {
      error.status = true;
      error.message = "All fields must be filled!";
      return error;
   }

   // Title validations
   if (title.length < 4) {
      error.status = true;
      error.message = "Title must be at least 4 characters long!";
      return error;
   }

   // Description validations
   if (description.length < 20) {
      error.status = true;
      error.message = "Description must be at least 20 characters long!";
      return error;
   }

   if (description.length > 50) {
      error.status = true;
      error.message = "Description max length is 50 characters!";
      return error;
   }

   // Image URL validations
   if (!/^http[s]?:\/\/.+/gi.test(imageUrl)) {
      error.status = true;
      error.message = "Image URL must starts with http:// or https://!";
      return error;
   }

   return error;
}

function courseDetailsValidations(req, course) {
   let show = {
      isCreator: false,
      alreadyEnrolled: false,
      available: false
   }

   if (course.creator.toString() == req.userID) {
      show.isCreator = true;
      return show;
   }

   if (JSON.stringify(course.enrolledUsers).includes(req.userID)) {
      show.alreadyEnrolled = true;
      return show;
   }

   show.available = true;
   return show;
}

module.exports = {
   registerValidations,
   courseValidations,
   courseDetailsValidations
}