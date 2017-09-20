const Event = require('../models/events')

const eventController = {};

eventController.all = (req, res) =>{
    Events.findAll()
    .then(rez => {
        res.json({
            message: 'ok',
            data: rez
        })
    }).catch(err =>{
        console.log(err)
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

module.exports = eventController;