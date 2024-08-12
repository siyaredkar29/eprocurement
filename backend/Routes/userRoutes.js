const express = require("express");
const verifyJWT = require("../middleware/jwtAuth");
const Router = express.Router();
const userController = require("../controllers/userControllers")


Router.post("/signin",userController.signIn );

Router.post("/signup", userController.signUp);


Router.post("/googlesignin",userController.googleSignIn)

Router.post("/isauth",verifyJWT,userController.isAuth)
module.exports = Router;
