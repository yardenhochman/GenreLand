const db = require('../db/config');

const Events = {};

Events.insert = data => {
    return db.one(`
    INSERT INTO events
    (title, address, datetime, genre, description, createdby)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [data.title, data.address, data.datetime, data.genre, data.description, data.createdby])
};

