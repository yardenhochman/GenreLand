const Events = require('../models/events')

const profileController = {};

profileController.findUsersEvents = (req, res) =>{
    Events2user.findById(req.body.id)
    .then(rez =>{
        res.json({
            message: 'ok',
            data: rez,
            eventsAttending: res.locals.eventsAttending
        })
    })
}

profileController.findUsersAttendEvents = (req, res, next) =>{
    Events2user.findAUsersEvents(req.body.id)
    .then(rez =>{
        res.locals.eventsAttending = rez
        next();
    })
}

module.exports = profileController;