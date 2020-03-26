import { response } from "express"

console.log('Client side Javascript is loaded')

fetch('http://localhost:3000/address=%20helsinki').then((response) => {
    response.json().then((data) =>{
            if(data.error) {
                console.log(data.error)

            }else {
                console.log(data.location)
                console.log(data.forecast)
            }
    })
})


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

   const weatherform = document.querySelector('form')
   const search = document.querySelector('input')

   weatherform.addEventListener('submit',(event) => {
       event.preventDefault()
      
       const location = search.value
       console.log(location)
   })
