const request = require('postman-request');
require('dotenv').config();

const forecast = (latitude, longitude, callback) => {

    const APIkey = process.env.WEATHER_STACK_ACCESS_KEY
    const url = 'http://api.weatherstack.com/current?access_key=' + APIkey + '&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out."
                + " It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast