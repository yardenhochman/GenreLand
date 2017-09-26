const express = require('express');
const profileRoutes = express.Router();
const profileController = require('../controllers/profile-controller')

//import controller
//add routes

//displays profile page
profileRoutes.post('/:id', profileController.findUsersAttendEvents, profileController.findUsersEvents)

module.exports = profileRoutes;