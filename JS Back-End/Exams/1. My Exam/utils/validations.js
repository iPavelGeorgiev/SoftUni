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
   if (user.username.length < 3) {
      error.status = true;
      error.message = "Username must be at least 3 characters long!";
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

   if (user.password < 3) {
      error.status = true;
      error.message = "Password must be at least 3 characters long!";
      return error;
   }

   return error;
}

function playValidations(req) {
   const { title, description, imageUrl} = req.body;
   const error = { status: false };

   // Check for empty fields
   if (!title || !description || !imageUrl) {
      error.status = true;
      error.message = "All fields must be filled!";
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

function playDetailsValidations(req, play) {
   let show = {
      isCreator: false,
      alreadyLiked: false,
      available: false
   }

   if (play.creator.toString() == req.userID) {
      show.isCreator = true;
      return show;
   }

   if (JSON.stringify(play.usersLiked).includes(req.userID)) {
      show.alreadyLiked = true;
      return show;
   }

   show.available = true;
   return show;
}

module.exports = {
   registerValidations,
   playValidations,
   playDetailsValidations
}