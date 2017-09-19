const express = require('express');
const resultsRoutes = express.Router();
const resultsController = require('../controllers/result-controller')
const zipcodeHelper = require('../services/zipcode');


//import controller
//add routes

//to display the results page

//needs a controller to call a model that returns the results 
//displays the results page
resultsRoutes.post('/', resultsController.insertLocation, resultsController.insertMusic2Location, zipcodeHelper.getAllZips, resultsController.queryResults)



module.exports = resultsRoutes;