const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../publc')
const viewsPath = path.join(__dirname, '../templates')

app.set ('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {  // using render for hbs  as apposed to send for ht
    res.render('index', { 
        title: 'Weather',
        name: 'Carlos'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
    title: 'About',
    name: 'Gigliii'
    })
})

app.get('/help',(req,res)=> {
    res.render('help', {
        title: 'Help',
        name:'Hero2',
        message:'This is the help message according to Horrible'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'Its raining',
        location: 'Anywhere'
    })
})

app.use(express.static(path.join(__dirname,'../public')))


app.listen(3000,() => {
        console.log('server is up on port 3000')

})