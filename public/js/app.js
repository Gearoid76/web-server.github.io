import { response } from "express"

console.log('Client side Javascript is loaded')

fetch('http://puzzle.mead.io/puzzle').then((responce) => {
    response.json().then(() =>{
        console.log(data)

    })
})
fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidGltb20iLCJhIjoiY2s1NGNkanFjMDRlNTNza2JjbTVibWcxaSJ9.SJUSK7Y6kwUGVe2GCo_H6w&limit=1').then((responce) => {
    response.json().then(() =>{
        console.log(data)  

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }

    })
}
module.exports = geocode,
})
})
const weatherform = document.querySelector('form')
const search = document.querySelector('input')

weatherform.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location = search.value

    console.log(location)
})