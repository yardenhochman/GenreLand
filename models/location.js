const db = require('../db/config');

const Location = {};

Location.insert = (location) =>{
    return db.one (`
        INSERT INTO location
        (zipcode, description)
        Values ($1, $2)
        RETURNING *`,
        [location.zip, location.description])
};

module.exports = Location;