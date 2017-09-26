const db = require('../db/config');

const Events2user = {};

//user wants to join event only
Events2user.insert  = (data) => {
    return db.one (`
    INSERT INTO events2user( event_id, user_id )
    VALUES ($1, $2) RETURNING *`,
    [data.event_id, data.user_id])
};

/* user does not want to join specifc event, search by
user_id and event_id*/
Events2user.destroy = id => {
    return db.none(`
    DELETE FROM events2user
    WHERE event_id = $1`,
    [id])
};
//find event and display all user_id
Events2user.findById = id => {
    return db.query(`
    SELECT * FROM events2user
    WHERE event_id =$1`,
    [id])   
};

Events2user.findAllUsersAttendingEvents = id => {
    return db.query(`
    SELECT * FROM events
    JOIN events2user ON events.id = events2user.event_id
    WHERE events2user.user_id = $1`,
    [id])
}


module.exports = Events2user;