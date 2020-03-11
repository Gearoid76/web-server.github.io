const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../publc')

app.set ('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

const app= express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(path.join(__dirname,'../public')))


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