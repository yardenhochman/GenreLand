const Music2locations = require('../models/music2locations')


const resultsController = {};

resultsController.queryResults = (req, res) =>{
    Music2locations.results(data)
    .then(results =>{
        res.json({
            message: 'ok',
            data: data
        })
    }).catch(err =>{
        console.log(err)
        res.status(500).json({
            message: 'page not found',
            error: err
        })
    })
}

module.exports = resultsController;