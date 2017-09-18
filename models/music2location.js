const db = require('../db/config');

const Music2locations = {};

Music2locations.insert = (data) => {
    return db.one (`
    INSERT INTO music2location
    (music_id, location_id, user_id)
    VALUES ($1, $2, $3)
    RETURNIG *`
    [data.music_id, data.location_id, data.user_id])
}

module.exports = Music2locations;
