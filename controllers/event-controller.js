const Events2user = require('../models/events2user');
const Location = require('../models/location');
const Events = require('../models/events');

const eventController = {};
/* 
    this controller methods sends the list of zipcodes to the model
    which brings back a list of events for each zipcode
    it then takes the list of events and counts the number of participants
    based on users2events
    */
//here we'll have a helper function that sorts the response, so we 
            //can feed a list of events to the DB to ask for the number of participants
            //in it.


    /* res.json({
                message: 'shows events for a given zipcode',
                data: rez
            }) */
eventController.EventsByZips = (req, res, next) =>{
    Events.FindByZips(res.locals.allZips)
    .then( rez => {
        res.locals.events = rez
        next()
        }).catch( err => console.log(err))
}

eventController.findAll = (req, res) =>{
    Events.findAll('query results by zip events')
    .then(rez => {
        res.json({
            message: 'show all events',
            data: rez
        })
    }).catch(err =>{
        console.log(err)
        res.status(500).json({
            message: 'all events page not found',
            error: err
        })
    })
}

eventController.findOne = (req, res) => {
    Events.findById(req.body.id)
    .then(rez =>{
        res.json({
            message: 'show one event',
            data: rez
        })
    }).catch(err =>{
        console.log(err)
    })
}

eventController.create = (req, res) => {
    Events.create({
        title: req.body.title,
        address: req.body.address,
        event_date: req.body.date,
        event_time: req.body.time,
        genre: req.body.genre,
        description: req.body.description,
        createdby: req.body.user,
        zip_code: req.body.zip_code
    })
    .then(rez =>{
        res.json({
            message: "event created",
            data: rez
        })
    }).catch(err =>{
        console.log(err)
    })
}

eventController.kill = (req, res) => {
    //the req.body.id has to be sent back 
    //from the delete button
    Events.destroy(req.body.id)
    .then(() =>{
        res.end();
    }).catch(err =>{
        console.log(err)
    })
}

eventController.update = (req, res) =>{
    Events.update({
        title: req.body.title,
        address: req.body.address,
        event_date: req.body.date,
        event_time: req.body.time,
        genre: req.body.genre,
        description: req.body.description,
        createdby: req.body.user,
        zip_code: req.body.zip_code  
    }).then(rez =>{
        res.json({
            message: 'edit event',
            data: rez
        })
    }).catch(err =>{
        console.log(err)
    })
}

module.exports = eventController;