const request = require('request');
const apiKey = process.env.ZIPCODE_API_KEY || "LKXCiiOCGbRa31ctn84iF0dKSXxVBSj2wPUkINKLRH14dOhwBiKew4HA94tNMjFE";
const zipCodeURL = "https://www.zipcodeapi.com/rest/";

const distance = {
    find: ( req, res, next ) => {
        request( 
            zipCodeURL + apiKey + '/distance.json/' + req.params.zipcode1 + 
            req.params.zipcode2 + '/mile', ( err, response, body ) => {
                if ( !err && response.statusCode == 200 ) {
                    response = JSON.parse( body );
                    res.send( response );
                } else {
                    console.log( response.statusCode + response.body )
                    res.send({
                        distance: -1
                    })
                }
            } 
            )
    }
}

module.exports = distance;