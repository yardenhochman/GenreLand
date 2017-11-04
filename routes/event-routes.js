const express = require('express');
const eventRoutes = express.Router();
const eventController = require('../controllers/event-controller');


 eventRoutes.get('/', eventController.findAll);

eventRoutes.post('/:id', eventController.findOne); 

eventRoutes.post('/', eventController.create);   //buggy

eventRoutes.delete('/:id', eventController.kill);

eventRoutes.put('/:id', eventController.update);

module.exports = eventRoutes;

/* 
Manual:

Methods:
findall - lists all events for the current user?
findone - adds an event to the DB?
create - 
kill - deletes an event 
update - updates an event's information

*/