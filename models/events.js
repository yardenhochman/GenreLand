const db = require('../db/config');
const events2user = require('./events2user')

const Events = {};


Events.FindByZips = data => {
    console.log('===events==>', data)
    return db.query(`
    SELECT
    events.id,
    events.title,
    events.address,
    events.event_date,
    events.event_time,
    events.genre,
    events.description,
    events.createdby,
    events.zip_code,
    COUNT(*) as count
    FROM events
    JOIN events2user ON events.id = events2user.event_id
    WHERE events.zip_code IN ($1, $2, $3, $4, $5)
    GROUP BY
    events.id,
    events.title,
    events.address,
    events.event_date,
    events.event_time,
    events.genre,
    events.description,
    events.createdby,
    events.zip_code`,
    [data[0].zip, data[1].zip, data[2].zip, data[3].zip, data[4].zip])
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
    event_date = $3,
    event_time = $4,
    genre = $5,
    description = $6,
    createdby = $7,
    zip_code = $8
    WHERE id = $9 `,
    [data.title, data.address, data.event_date, data.event_time, data.genre, data.description, data.createdby, data.zip_code, id])
}


Events.findUserCreatedEvents = id => {
    return db.query(`
    SELECT * FROM events
    WHERE createdby = $1`,
    [id])
}

// Events.queryById = id  => {
//     return db.query(`
// SELECT
// events.id, 
// events.title, 
// events.address,
// events.event_date, 
// events.event_time,
// events.genre, 
// events.description,
// events.createdby, 
// events.zip_code,
// COUNT(*) as count FROM events
// JOIN events2user ON 
// events.id = events2user.event_id
// GROUP BY events.id, 
// events.title,
// events.address,
// events.event_date, 
// events.event_time, 
// events.genre,
// events.description, 
// events.createdby, 
// events.zip_code`,
// [id])

//SELECT * 
// FROM events 
// WHERE zip_code IN ($1, $2, $3, $4, $5)`,
// [data[0].zip, data[1].zip, data[2].zip, data[3].zip, data[4].zip])


module.exports = Events;