const express = require('express');
const eventRoutes = express.Router();
const eventController = require('../controllers/result-controller')


//to display all events currently live
eventRoutes.get('/', eventController.all);

//display specific event page
eventRoutes.get('/:id', eventController.findOne);

// //create an event
// eventRoutes.post('/:id', somecontroller);

// //delete an event
// eventRoutes.delete('/:id', somecontroller);

// //update an event
// eventRoutes.put('/:id', somecontroller);

module.exports = eventRoutes;