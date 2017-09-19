require('isomorphic-fetch');
require('dotenv').config();

zipcodeapi_API_KEY

//add the url for the fetch
//add above key var to url
//.then should put the responded data in locals
//then call next()
function getAllZips(req, res, next){
    fetch('')
   .then(results =>{

    next()
   })
}

module.exports = {

};