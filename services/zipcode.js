require('isomorphic-fetch');
require('dotenv').config();
const axios = require('axios');


//add the url for the fetch
//add above key var to url
//.then should put the responded data in locals
//then call next()
function getZips(req, res, next){
    //google places configuration
    
    // axios(`https://www.zipcodeapi.com/rest/${process.env.zipcodeapi_API_KEY}/radius.json/${req.body.zipcode}/3/mi`)
//     axios('')
//    .then( 
       //allZip => {
        let allZips = [
            {
                zip: '11212' //allZip.data.zip_codes[0].zip_code
            },
            {
                zip: '10233' //allZip.data.zip_codes[1].zip_code   
            },
            {
                zip: '11213' //allZip.data.zip_codes[2].zip_code
            },
            {
                zip: '11233' //allZip.data.zip_codes[3].zip_code
            },
            {
                zip: '33244' //allZip.data.zip_codes[4].zip_code
            }
            ]
        //}
    console.log('====>', allZips)
       res.locals.allZips = allZips
      next()
//     }).catch( err => console.log(err) )
 }

module.exports = {getZips};