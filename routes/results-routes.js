const express = require('express');
const resultsRoutes = express.Router();
const resultsController = require('../controllers/result-controller')
const zipcodeHelper = require('../services/zipcode');


//displays the results page
resultsRoutes.post('/', resultsController.insertLocation, resultsController.insertMusic2Location, zipcodeHelper.getZips, resultsController.queryResults)


module.exports = resultsRoutes;