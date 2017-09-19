const Music2locations = require('../models/music2locations')
const Location = require('../models/location')

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

resultsController.insertLocation = (req, res, next) => {
    Location.insert(req.body.zipcode)
    .then(data =>{
        let location_id = data.location_id;
        res.locals.location_id =location_id;
        next();
    })
}

resultsController.insertMusic2Location = (req, res, next) =>{
    let data = {
        genre_id: req.body.genre,
        location_id: res.locals.location_id,
        user_id: req.body.id
    }
    Music2locations.insert(data)
    .then(() => {
        next();
    })
}

module.exports = resultsController;