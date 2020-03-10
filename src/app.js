const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app= express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(path.join(__dirname,'../public')))



app.get('/help',(req,res) =>{
    res.send([{
        name: 'Andrew',
        age: 35
    },{
        name: 'sahra',
        age: 3
    }])
})



app.get('/about',(req,res)=> {
    res.send('<h1>about page here we go</h1>')
})

app.get('/weatherapp',(req,res) =>{
    res.send({
        forcast: 50,
        city: 'Dublin'

    })
})


//app.com
//app.com/help
//app.com/about

app.listen(3000,() => {
        console.log('server is up on port 3000')

})