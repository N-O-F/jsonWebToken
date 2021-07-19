const Router = require("express").Router();
const {login,verify_refresh_token,logout} = require("../controllers/authController");

Router.post("/login",login)
Router.delete("/logout",logout);
Router.post("/token",verify_refresh_token)

module.exports =  Router;