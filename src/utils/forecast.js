const request = require('request')
const forecast = (latitude,longitude,callback) => {
    const url ='https://api.darksky.net/forecast/e3282e3f4a0ff8e8c89d74994b0009a2/'+latitude +','+ longitude+'?lang=en&units=si'
//37.8267,-122.4233

    request({url, json: true },(error, { body })=> {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }else if (body.error){
            callback('Unable to find location. Try another search', undefined)
    } else {
        //console.log (body.daily.data[0])    
        callback (undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '°C ' +'With a tempiture high of ' + body.daily.data[0].temperatureHigh
        + '°C '+ 'With a tempiture low of ' + body.daily.data[0].temperatureLow + '°C '+' There is a '+ body.currently.precipProbability + '% chance of rain.')// works as far as here.
        //+' Sun rises '+ body.daily.data[0].sunriseTime +' Sun sets '+ body.daily.data[0].sunsetTime + ' MoonPhaze ' + body.daily.data[0].moonPhaze) // dont forget the bracket
        //callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        
        }

    })
}

module.exports = forecast
