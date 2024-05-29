const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()


app.get('', (req, res) => {
    res.send({
        title: 'Weather',
        name: 'Elham'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a address term'
        })
    }

    res.send({
        forecast: 'it is sunny',
        location: req.query.address
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})













// let address = process.argv[2]
// if (!address) {
//     console.log('Please provide an address!')
// } else {
//     geocode(address, (error, { latitude, longitude, location } = {}) => {
//         if (error) {
//             return console.log(error)
//         }

//         forecast(latitude, longitude, (error, forecastData) => {

//             if (error) {
//                 return console.log(error)
//             }
//             console.log(location)
//             console.log(forecastData)
//         })

//     })
// }



