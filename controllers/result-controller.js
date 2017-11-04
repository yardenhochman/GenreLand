const Music2locations = require('../models/music2location')
const Location = require('../models/location')

const resultsController = {};

resultsController.queryResults = (req, res) =>{
    console.log('queryResults reached');
    Music2locations.results(res.locals.allZips)
    .then( results => {
        console.log('this was the results controller')
        res.json({
            message: 'ok',
            data: results,
            events: res.locals.events
        })
    }).catch( err => {
        console.log(err)
        res.status(500).json({
            message: 'page not found',
            error: err
        })
    })
}

resultsController.insertLocation = (req, res, next) => {
    console.log('insertLocation reached');
    console.log(req.body)
    Location.insert(req.body.zipcode,req.body.description)
    .then( data => {
        res.locals.id = data.id;
        next();
    })
    .catch( err => console.log(err) )
}

resultsController.insertMusic2Location = (req, res, next) => {
    console.log('music2locations reached');
    let data = {
        genre_id: req.body.genre,
        location_id: res.locals.id,
        user_id: req.body.id
    }
    Music2locations.insert(data)
    .then( () => next() )
    .catch(err => console.log(err) )
}

module.exports = resultsController;