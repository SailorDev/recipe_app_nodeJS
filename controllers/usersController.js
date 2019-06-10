const User = require('../models/user');

module.exports = {
   index: (req, res, next) => {
      User.find({})
         .then(users => {
            res.locals.users = users;
            next();
         })

         .catch(error => {
            console.log(`Error Fetching users: ${error.message}`)
            next(error);
         })
   },

   indexView: (req, res, next) => {
      res.render("users/index");
   }
}
