require('isomorphic-fetch');
require('dotenv').config();

//add the url for the fetch
//add above key var to url
//.then should put the responded data in locals
//then call next()
function getAllZips(req, res, next){
    fetch(`https://www.zipcodeapi.com/rest/${zipcodeapi_API_KEY}/radius.json/${req.body.zipcode}/3/mi`)
   .then(fetchRez => {
        fetchRez.json()
   })
   .then(allZip => {
    let allZips = allZip.zip_code;
    res.locals.allZips = allZips;
    next();
   })
}

module.exports = {
    getAllZips,
};