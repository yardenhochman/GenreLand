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

Events.findAll = () => {
    return db.query(`
    SELECT * FROM
    events RETURNING *`)
};

Events.findById = id => {
    return db.one(`
    SELECT * FROM events
    WHERE id = $1`,
    [id])
};

Events.create = data => {
    return db.one(`
    INSERT INTO events 
    (title, address, event_date, event_time, genre, description, createdby )
    VALUES ($1, $2, $3, $4, $5, $6, $7`,
    [data.title, data.address, data.event_date, data.event_time, data.genre, data.description, data.createdby])
};

module.exports = Events;