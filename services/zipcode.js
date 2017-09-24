require('isomorphic-fetch');
require('dotenv').config();
const axios = require('axios');


//add the url for the fetch
//add above key var to url
//.then should put the responded data in locals
//then call next()
function getZipsAndPlaces(req, res, next){
    //google places configuration
    const places = {}
    places.type = 'bar';
    places.searchRadius = 1000;
    places.searchQuery = req.body.zipcode
    
    axios(`https://www.zipcodeapi.com/rest/${process.env.zipcodeapi_API_KEY}/radius.json/${req.body.zipcode}/3/mi`)
   .then( allZip => {
        let allZips = [
            {
                zip: allZip.data.zip_codes[0].zip_code
            },
            {
                zip: allZip.data.zip_codes[1].zip_code   
            },
            {
                zip: allZip.data.zip_codes[2].zip_code
            },
            {
                zip: allZip.data.zip_codes[3].zip_code
            },
            {
                zip: allZip.data.zip_codes[4].zip_code
            }
            ]
        console.log('====>', allZips)
        res.locals.allZips = allZips
        axios(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${places.searchQuery}&type=${places.type}&radius=${places.searchRadius}&&key=${process.env.GOOGLE_PLACES_API}`)
        .then( searchResults => {
            let venues = [
                searchResults.data.results[0].name,
                searchResults.data.results[1].name,
                searchResults.data.results[2].name,
                searchResults.data.results[3].name,
                searchResults.data.results[4].name,
            ]
            console.log('====>', venues)
            res.locals.venues = venues;
            next();
        }).catch( err => console.log(err) )
    }).catch( err => console.log(err) )
}

module.exports = {
    getZipsAndPlaces,
};