const request = require('postman-request');
require('dotenv').config();

const geocode = (address, callback) => {
    const accessToken = process.env.GEO_CODE_ACCESS_TOKEN
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + address + '&access_token=' + accessToken + '&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].properties.coordinates.longitude,
                latitude: response.body.features[0].properties.coordinates.latitude,
                location: response.body.features[0].properties.full_address

            })
        }
    })

}

module.exports = geocode