const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +address+ '.json?access_token=pk.eyJ1IjoiYXNod2FuaXRyMDAxIiwiYSI6ImNrMXE4aDFmOTExdjAzY3RpY2M3NTNvdHcifQ.JfzOe5YGI4XkCbfR9NkWmA'
    // console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            // console.log(body)
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode