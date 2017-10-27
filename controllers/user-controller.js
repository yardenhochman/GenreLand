const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

const usersController = {};

usersController.index = (req, res) => {
  res.json({
    user: req.user,
    data: 'Put a user profile on this route'
  });
}



usersController.create = (req, res) => {
  console.log(req.body,'<-------')
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password_digest, salt);
  User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.json({
        user: req.user,
        data: 'User profile message'
      })
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}




module.exports = usersController;