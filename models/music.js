const db = require('../db/config');

const Music = {};

//This table will be populated on its own

Music.insert = data => {
    return db.one(`
    INSERT INTO Music
    (genre)
    VALUES ($1)`,
    [data.genre])
}

module.exports = Music;