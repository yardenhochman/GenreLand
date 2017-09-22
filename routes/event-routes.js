const express = require('express');
const eventRoutes = express.Router();
const eventController = require('../controllers/event-controller');
//login register
const usersController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helper');



//to display all events currently live
 eventRoutes.get('/', eventController.findAll);

//display specific event page
eventRoutes.get('/:id', eventController.findOne);

//create an event
eventRoutes.post('/:id', authHelpers.loginRequired, eventController.create);

//delete an event
eventRoutes.delete('/:id', authHelpers.loginRequired, eventController.kill);

//update an event
eventRoutes.put('/:id', authHelpers.loginRequired, eventController.update);

module.exports = eventRoutes;