const geocode = require('./utils/geocode')


geocode('Berlin', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})