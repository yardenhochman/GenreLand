const express = require('express');
const resultsRoutes = express.Router();
const resultsController = require('../controllers/results-controller')

//import controller
//add routes

//to display the results page

//needs a controller to call a model that returns the results 
//displays the results page
resultsRoutes.get('/', resultsController.queryResults)


module.exports = resultsRoutes;