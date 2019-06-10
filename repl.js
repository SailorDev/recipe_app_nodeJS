const mongoose = require('mongoose');
const Subscriber = require('./models/subscriber');
const Course = require('./models/course');
const User = require('./models/user');

let testCourse;
let testSubscriber;
let testUser;
let targetSubscriber;


mongoose.connect(
   "mongodb://localhost:27017/recipe_db",
   { useNewUrlParser: true }
);


mongoose.Promise = global.Promise;


User.create({
   name: {
      first: "Abeer",
      last: "Hamdy"
   },
   email: "Abeer@gmail.com",
   zipCode: "1234",
   password: "loveall"
})
   .then(user => {
      testUser = user
      return Subscriber.findOne({
         email: user.email
      })
   })
   .then(subscriber => {
      testUser.subscribedAccount = subscriber;
      testUser.save().then(user => console.log('user updated!'))
   })
   .catch(error => console.log(error.message))






/*
User.create({
   name: {
      first: "Muhammed",
      last: "Alaa"
   },
   email: "nofear@gmail.com",
   password: "pass123"
})
   .then(user => testUser = user)
   .catch(error => console.log(error.message))




User.findOne({ email: "nofear@gmail.com" })
   .then(user => testUser = user)
   .catch(error => console.log(error.message))



*/











/*
Subscriber.remove({})
   .then((items) => console.log(`Removed ${items.n} records!`))
   .then(() => {
      return Course.remove({});
   })
   .then((items) => console.log(`Removed ${items.n} records!`))
   .then(() => {
      return Subscriber.create({
         name: "Muhammed",
         email: "alaa@gmail.com",
         zipCode: "12345"
      })
   })
   .then(subscriber => {
      console.log(`Created Subscriber ${subscriber.getInfo()}`);
   })
   .then(() => {
      return Subscriber.findOne({
         name: "Muhammed"
      });
   })
   .then(subscriber => {
      testSubscriber = subscriber;
      console.log(`Found One Subscriber: ${subscriber.getInfo()}`);
   })
   .then(() => {
      return Course.create({
         title: "Tomato Land",
         description: "Locally Farmed tomatoes only!",
         zipCode: 12345,
         items: ['cherry', 'heirloom']
      });
   })
   .then(course => {
      testCourse = course
      console.log(`Created Course : ${course.title}`);
   })
   .then(() => {
      testSubscriber.courses.push(testCourse);
      testSubscriber.save();
   })
   .then(() => {
      return Subscriber.populate(testSubscriber, "courses");
   })
   .then(subscriber => console.log(subscriber))
   .then(() => {
      return Subscriber.find({ courses: mongoose.Types.ObjectId(testCourse._id) });
   })
   .then(subscriber => console.log(subscriber));


*/













