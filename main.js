"use strict";

const express = require("express");
const app = express();
const router = express.Router();

const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");
const subscribersController = require("./controllers/subscribersController");
const usersController = require('./controllers/usersController');

const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

// const Subscriber = require("./models/subscriber");


// Using Mongoose :
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});


// Set Port and EJS 
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// Use Express Middleware : 
app.use(express.static("public"));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

// Play with routes
app.use(homeController.logRequestPaths);

router.get("/name", homeController.respondWithName);
router.get("/items/:vegetable", homeController.sendReqParam);

router.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  res.render("index", { subscribers: req.data });
});

router.get("/", homeController.index);
router.get("/courses", homeController.showCourses);

router.get("/contact", subscribersController.getSubscriptionPage);
router.post("/subscribe", subscribersController.saveSubscriber);

// play routes (Users)
router.get('/users', usersController.index, usersController.indexView);
router.get('/users/new', usersController.new);
router.post('/users/create', usersController.create, usersController.redirectView);
router.get('/users/:id', usersController.show, usersController.showView);

// Play with Error Controller
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
