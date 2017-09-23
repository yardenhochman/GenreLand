const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helper');
const usersController = require('../controllers/user-controller');

// authRouter.get('/login', authHelpers.loginRedirect);

authRouter.get('/success', (req, res) => {
  res.json({
    auth: true,
    message: 'ok',
    user: req.user,
  });
  });

authRouter.get('/register', (req, res) => {
  res.redirect('/register');
});

authRouter.post('/register', usersController.create);

// this is the version j sent me as a templatew to use for the new loginRequired function the client side
authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/auth/success', 
  failureRedirect: '/auth/failure',
  failureFlash: true,
})
);

// authRouter.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/auth/login',
//     failureFlash: true,
//   }),
// );

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;