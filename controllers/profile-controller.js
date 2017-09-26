const Events = require('../models/events')
const Events2user = require('../models/events2user')

const profileController = {};

profileController.findUsersEvents = (req, res) =>{
    console.log('last controller')
    console.log(req.body.data)
    // console.log(req.body.data.id)
    // console.log(req.body.id)
    Events.findUserCreatedEvents(req.body.id)
    .then(rez =>{
        res.json({
            message: 'ok',
            data: rez,
            eventsAttending: res.locals.eventsAttending
        })
    }).catch(err =>{
        console.log(err)
    })
}

profileController.findUsersAttendEvents = (req, res, next) =>{
    console.log('first controller')
    Events2user.findAllUsersAttendingEvents(req.body.id)
    .then(rez =>{
        res.locals.eventsAttending = rez
        next();
    }).catch(err =>{
        console.log(err)
    })
}

module.exports = profileController;
