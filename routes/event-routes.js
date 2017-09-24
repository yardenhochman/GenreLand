const express = require('express');
const eventRoutes = express.Router();
const eventController = require('../controllers/event-controller');

//to display all events currently live
/* 

I supposed this controller method will be used when the user clicks on 
"events" on the results page ("see component Search/results.js")
it should 
take the zipcode list,
search for events for each zipcode in the event models,
return a list of events and their zipcodes. somewhat similarly to the results route
 */
 eventRoutes.get('/', eventController.findAll);

/*
display specific event page:
take the event ID, and display all information relevant to it.
*/
eventRoutes.get('/:id', eventController.findOne);

//create an event for the current user. 
eventRoutes.post('/:id', eventController.create);

//next two methods will be related to the user's profile
//delete an event
eventRoutes.delete('/:id', eventController.kill);

//update an event
eventRoutes.put('/:id', eventController.update);

module.exports = eventRoutes;