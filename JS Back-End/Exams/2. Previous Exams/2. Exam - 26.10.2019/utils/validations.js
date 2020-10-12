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
   if (user.username.length < 4) {
      error.status = true;
      error.message = "Username must be at least 4 characters long!";
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

   if (user.password < 8) {
      error.status = true;
      error.message = "Password must be at least 8 characters long!";
      return error;
   }

   // Account Amount validations
   if (user.amount && user.amount < 0) {
      error.status = true;
      error.message = "Account amount must be positive number!";
      return error;
   }

   if (user.amount && isNaN(user.amount)) {
      error.status = true;
      error.message = "Account amount must be of type number!";
      return error;
   }

   return error;
}

function addExpenseValidations(req) {
   const availableCategories = ["advertising", "benefits", "car", "equipment", "fees", "home-office", "insurance", "interest", "Labor", "maintenance", "materials", "meals-and-entertainment", "office-supplies", "other", "professional-services", "rent", "taxes", "travel", "utilities"];
   const {
      merchant,
      total,
      vault,
      category,
      description
   } = req.body;
   const error = { status: false };

   // Check for empty fields
   if (!merchant || !total || !vault || !category || !description) {
      error.status = true;
      error.message = "All fields must be filled!";
      return error;
   }

   // Merchant validations
   if (merchant < 4) {
      error.status = true;
      error.message = "Merchant must be at least 4 characters long!";
      return error;
   }

   // Total validations
   if (isNaN(total)) {
      error.status = true;
      error.message = "Total must be of type number!";
      return error;
   }

   if (total <= 0) {
      error.status = true;
      error.message = "Total must be positive number!";
      return error;
   }

   // Category validations
   if (!availableCategories.includes(category)) {
      error.status = true;
      error.message = "Category must be one from the given options!";
      return error;
   }

   // Description validations
   if (description.length < 10 || description.length > 50) {
      error.status = true;
      error.message = "The description must be minimum 10 characters long and 50 characters maximum!";
      return error;
   }

   return error;
}

module.exports = {
   registerValidations,
   addExpenseValidations
}