const Events = require('../models/events')

const eventController = {};

eventController.findAll = (req, res) =>{
    Events.findAll('query results by zip events')
    .then(rez => {
        res.json({
            message: 'ok',
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
            message: 'ok',
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
        createdby: req.body.user
    })
    .then(rez =>{
        res.json({
            message: "ok",
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
        createdby: req.body.user  
    }).then(rez =>{
        res.json({
            message: 'ok',
            data: rez
        })
    }).catch(err =>{
        console.log(err)
    })
}

module.exports = eventController;