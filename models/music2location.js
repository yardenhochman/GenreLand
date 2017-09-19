const db = require('../db/config');

const Music2locations = {};

Music2locations.insert = (data) => {
    return db.one (`
    INSERT INTO music2location
    (music_id, location_id, user_id)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [data.genre_id, data.location_id, data.user_id])
}

Music2locations.results = data => { 
    console.log('===music2locations==>', data)
    return db.query(`
    SELECT location.zipcode, music.genre FROM music
    JOIN music2location 
    ON music2location.music_id = music.id
    JOIN location 
    ON music2location.location_id = location.id
    WHERE location.zipcode IN ($1, $2, $3, $4, $5)`,
    [data[0].zip, data[1].zip, data[2].zip, data[3].zip, data[4].zip])
}

module.exports = Music2locations;
