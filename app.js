const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode('Berlin', (error, data) => {
//     console.log('Error: ', error)
//     console.log('Data: ', data)
// })

forecast('52.5170365', '13.3888599', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})