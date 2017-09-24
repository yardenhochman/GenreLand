const db = require('../db/config');

const Events = {};

Events.findAll = (zipcode) => {
    return db.query(`
    SELECT * FROM
    events WHERE zipcode = zip_code`)
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
    (title, address, zip_code, event_date, event_time, genre, description, createdby )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8`,
    [data.title, data.address, data.zip_code, data.event_date, data.event_time, data.genre, data.description, data.createdby])
};

Events.destroy = id => {
    return db.none(`
    DELETE FROM events
    WHERE id = $1`,
    [id])
}

Events.update = (data, id) => {
    return db.one(`
    UPDATE events SET
    title = $1,
    address = $2,
    zip_code = $3
    event_date = $4,
    event_time = $5,
    genre = $6,
    description = $7,
    createdby = $8,
    WHERE id = $9 `,
    [data.title, data.address, data.zip_code, data.event_date, data.event_time, data.genre, data.description, data.createdby, id])
}

module.exports = Events;