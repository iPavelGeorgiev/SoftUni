function cubeAndAccessoryValidations(req) {
   const data = { ...req.body };
   const error = { status: false };

   if (!data.name || !data.description || !data.imageUrl) {
      error.status = true;
      error.message = "All fields must be filled!";
   }

   if (!error.status && data.name.length < 5) {
      error.status = true;
      error.message = "Name must be at least 5 characters long!";
   }

   if (!error.status && !/^[A-Za-z0-9\s]+$/.test(data.name)) {
      error.status = true;
      error.message = "Name must consists English letters, digits and whitespaces!";
   }

   if (!error.status && data.description.length < 20) {
      error.status = true;
      error.message = "Description must be at least 20 characters long!";
   }

   if (!error.status && data.description.length > 1000) {
      error.status = true;
      error.message = "Description must be less than or equal to 1000 characters long!";
   }

   if (!error.status && !/^[A-Za-z0-9\s]+$/.test(data.description)) {
      error.status = true;
      error.message = "Description must consists English letters, digits and whitespaces!";
   }

   if (!error.status && !/^http[s]?:\/\/.+/gi.test(data.imageUrl)) {
      error.status = true;
      error.message = "ImageUrl must starts with http:// or https://!";
   }

   return error;
}

function registerValidations(req) {
   const user = { ...req.body };
   const error = { status: false };

   if (!user.username || !user.password || !user.repeatPassword) {
      error.status = true;
      error.message = "All fields must be filled!";
   }

   if (!error.status && user.username.length < 5) {
      error.status = true;
      error.message = "Username must be at least 5 characters long!";
   }

   if (!error.status && user.username.length > 25) {
      error.status = true;
      error.message = "Username must be less than or equal to 25 characters long!";
   }

   if (!error.status && !/^[A-Za-z0-9]+$/.test(user.username)) {
      error.status = true;
      error.message = "Username should consists English letters and digits only!";
   }

   if (!error.status && user.password !== user.repeatPassword) {
      error.status = true;
      error.message = "Your password and confirmation password do not match!";
   }

   if (!error.status && user.password < 8) {
      error.status = true;
      error.message = "Password must be at least 8 characters long!";
   }

   if (!error.status && !/^[A-Za-z0-9]+$/.test(user.password)) {
      error.status = true;
      error.message = "Password must contain only English letters and digits!";
   }

   return error;
}

module.exports = {
   cubeAndAccessoryValidations,
   registerValidations
}