const db = require('../db/config');

const Event2user = {};
//users who partipant
//events2user
//event_id INTEGER, user_id INTEGER

//user wants to join event only
Event2user.insert  = (data) => {
    return db.one (`
    INSERT INTO events2user( event_id, user_id )
    VALUES ($1, $2) RETURNING *`,
    [data.event_id, data.user_id])
};

/* user does not want to join specifc event, search by
user_id and event_id*/
Event2user.destroy = id => {
    return db.none(`
    DELETE FROM events2user
    WHERE user_id = $1 AND event_id = $2`,
    [id])
};
//find event and display all user_id
Event2user.findById = id => {
    return db.query(`
    SELECT * FROM events2user
    WHERE event_id =$1`)   
};

module.exports = Event2user;