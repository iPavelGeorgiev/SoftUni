import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";
import Storage from "../helpers/storage.js";
import Shared from "../helpers/sharedFunc.js"

function validations(ctx) {
   const { meal, ingredients, prepMethod, description, foodImageURL, category } = ctx.params;

   // Validations
   if (meal.length < 4) {
      Shared.clearAllFields();
      alert("The meal name should be at least 4 characters long!");
      return false;
   }

   if ((ingredients.split(", ")).length < 2) {
      Shared.clearAllFields();
      alert("The ingredients should be at least 2!");
      return false;
   }

   if (prepMethod.length < 10 || description.length < 10) {
      Shared.clearAllFields();
      alert("The preparation method and description should be at least 10 characters long each");
      return false;
   }

   if (!/^((http|https):\/\/)/.test(foodImageURL)) {
      Shared.clearAllFields();
      alert("The foodImageURL should start with \"http://\" or \"https://\"!");
      return false;
   }

   if (category === undefined) {
      Shared.clearAllFields();
      alert("One of the food categories should be selected!");
      return false;
   }

   return true;
}

function createRecipeObj(ctx) {
   const { meal, ingredients, prepMethod, description, foodImageURL, category } = ctx.params;

   const categoryImages = {
      "Grain Food": "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
      "Fruits": "https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg",
      "Milk, cheese, eggs and alternatives": "https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg",
      "Lean meats and poultry, fish and alternatives": "https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg",
      "Vegetables and legumes/beans": "https://t3.ftcdn.net/jpg/00/25/90/48/240_F_25904887_fhZJ692ukng3vQxzHldvuN981OiYVlJ1.jpg"
   }

   return {
      meal,
      ingredients: ingredients.split(", "),
      prepMethod,
      description,
      foodImageURL,
      category,
      likesCounter: 0,
      categoryImageURL: categoryImages[category]
   }
}

export function getLogout(ctx) {
   Fetch.post("user", "_logout")
      .then(() => {
         Storage.clearData();
         ctx.redirect("#/home");
      });
}

export function getShareRecipe(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/recipes/share-recipe.hbs");
}

export function postShareRecipe(ctx) {
   const { meal, ingredients, prepMethod, description, foodImageURL, category } = ctx.params;

   const validate = validations(ctx);

   if (validate) {
      const recipe = createRecipeObj(ctx);

      Fetch.post("appdata", "recipes", recipe)
      .then(() => {
         ctx.redirect("#/home");
      })
      .catch(console.error);
   }
}

export function getRecipeDetails(ctx) {
   Info.getStorageInfo(ctx);
   const { id } = ctx.params;

   Fetch.get("appdata", `recipes/${id}`)
      .then(recipeInfo => {
         ctx.recipe = recipeInfo;

         if (ctx.userId === recipeInfo._acl.creator) {
            ctx.isCreator = true;
         }

         this.loadPartials(Info.getPartials())
            .partial("./templates/recipes/recipe-details.hbs");
      });
}

export function likeRecipe(ctx) {
   const { id } = ctx.params;

   Fetch.get("appdata", `recipes/${id}`)
      .then(recipe => {
         recipe["likesCounter"] = recipe.likesCounter + 1;

         Fetch.put("appdata", `recipes/${id}`, recipe)
            .then(() => {
               ctx.redirect(`#/recipe/${id}`);
            })
            .catch(console.error);
      })
      .catch(console.error)
}

export function deleteRecipe(ctx) {
   Info.getStorageInfo(ctx);
   const { id } = ctx.params;

   Fetch.del("appdata", `recipes/${id}`)
      .then(() => {
         ctx.redirect("#/home");
      })
      .catch(console.error);
}

export function getEdit(ctx) {
   Info.getStorageInfo(ctx);
   const { id } = ctx.params;

   Fetch.get("appdata", `recipes/${id}`)
      .then(recipe => {
         recipe.ingredients = recipe.ingredients.join(", ");
         ctx.recipe = recipe;

         this.loadPartials(Info.getPartials())
            .partial("./templates/recipes/edit-recipe.hbs");
      })
}

export function postEdit(ctx) {
   Fetch.get("appdata", `recipes/${ctx.params.id}`)
      .then(recipe => {
         const likes = recipe.likesCounter;

         const validate = validations(ctx);

         if (validate) {
            const recipe = createRecipeObj(ctx);
            recipe.likesCounter = likes;

            Fetch.put("appdata", `recipes/${ctx.params.id}`, recipe)
               .then(() => {
                  ctx.redirect("#/home");
               })
               .catch(console.error);
         }
      })
      .catch(console.error)
}