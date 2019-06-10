const mongoose = require('mongoose');
const Subscriber = require('./models/subscriber');

mongoose.connect(
   "mongodb://localhost:27017/recipe_db",
   { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;


// Subscriber.create({
//    name: "Abeer",
//    email: "abeer@gmail.com",
//    zipCode: '12345'
// })
//    .then(subscriber => console.log(subscriber))
//    .catch(error => console.log(error.message));




let subscriber;

// Subscriber.findOne({
//    name: "Abeer"
// })
//    .then(result => {
//       subscriber = result
//       console.log(subscriber.getInfo())
//    })


Subscriber.find({
   name: "Abeer"
})
   .then(result => {
      subscriber = result
      console.log(subscriber)
   })
   .catch(error => {
      console.log(error.message)
   })


// Subscriber.remove({
//    name: 'Abeer'
// })
//    .then(subscriber => {
//       console.log(subscriber)
//    })
//    .catch(error => {
//       console.log(error.message)
//    })