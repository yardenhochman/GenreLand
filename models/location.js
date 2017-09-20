const db = require('../db/config');

const Location = {};

Location.insert = (zipcode, description) =>{
    return db.one (`
        INSERT INTO location
        (zipcode, description)
        Values ($1, $2)
        RETURNING *`,
        [zipcode, description])
};

module.exports = Location;