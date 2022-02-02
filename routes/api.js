var express = require("express");
var router = express.Router();
const RecipeModel = require("../models/Recipe.model");
const CommentModel = require("../models/Comment.model");
const myFetch = require("../middlewares/fetch");
const mySender = require("../middlewares/renderHelp").mySender;

//const myRedirect = require("../middlewares/renderHelp").myRedirect;

//all routes preceded by "api/", example : "api/recipes" -----------------------------
// expected outputs for each in https://blackhill.postman.co/workspace/My-Workspace~9707a430-1112-4a9e-8ec1-37f5cd561de6/collection/19384272-31c1b078-f5e4-412b-91cc-fe4bf274edb3?ctx=documentation

router.get(
  "/all-recipes",
  myFetch(RecipeModel, "recipes").find,
  mySender(["recipes"])
);

router.get(
  "/recipes/details",
  myFetch(RecipeModel, "recipes").find,
  mySender(["recipes"])
);

router.get(
  "/recipes/comments",
  myFetch(CommentModel, "comments").find,
  mySender(["body", "comments"])
);

module.exports = router;