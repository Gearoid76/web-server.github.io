console.log('Client side Javascript is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = console.log(data.error)
messageTwo.textContent = console.log(data.location)
messageTwo.textContent = console.log(data.forecast)

   weatherForm.addEventListener('submit',(e) => {
       e.preventDefault()
      
       const location = search.value

       fetch('http://localhost:3000/address=' + location).then((response) => {
    response.json().then((data) =>{
            if(data.error) {
                console.log(data.error)

            }else {
                console.log(data.location)
                console.log(data.forecast)
            }
    })
})

       console.log(location)
   })
