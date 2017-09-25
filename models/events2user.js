const db = require('../db/config');

const Events2user = {};
//users who partipant
//events2user
//event_id INTEGER, user_id INTEGER

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
    WHERE user_id = $1 AND event_id = $2`,
    [id])
};
//find event and display all user_id
Events2user.findById = id => {
    return db.query(`
    SELECT * FROM events2user
    WHERE event_id =$1`)   
};


Events2user.findAll = id => {
    return.query(`SELECT event_id, count(*) from events2user group by event_id having event_id = $1`)
};

module.exports = Events2user;