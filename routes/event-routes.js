const express = require('express');
const eventRoutes = express.Router();
const eventController = require('../controllers/event-controller')


//to display all events currently live
eventRoutes.get('/', eventController.findAll);

//display specific event page
eventRoutes.get('/:id', eventController.findOne);

//create an event
eventRoutes.post('/:id', eventController.create);

//delete an event
eventRoutes.delete('/:id', eventController.kill);

//update an event
eventRoutes.put('/:id', eventController.update);

// module.exports = eventRoutes;