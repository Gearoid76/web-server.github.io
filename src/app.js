const path = require('path')
const express = require('express')
const hbs = require ('hbs')

const app = express()

//before path for express config
const publicDirectoryPath = path.join(__dirname, '../publc')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars enging and views location
app.set ('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directiory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {  // using render for hbs  as apposed to send for ht
    res.render('index', { 
        title: 'Weather',
        name:'Gearoid Hero2'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
    title: 'About',
    name:'Gearoid Hero2'
    })
})

app.get('/help',(req,res)=> {
    res.render('help', {
        title: 'Help',
        name:'Gearoid Hero2',
        helpText:'This is the help message according to Horrible'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'Its raining',
        location: 'Anywhere'
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title:'404',
        name: 'Gearoid Error Ok Ceallachain',
        errorMessage:'Help page not found'
    })
})


app.get('*',(req, res) => {
    res.render('404',{
        title: '404',
        name: 'Gearoid Error Ok Ceallachain',
        errorMessage: 'Page not found'
    })
})

app.use(express.static(path.join(__dirname,'../public')))


app.listen(3000,() => {
        console.log('server is up on port 3000')

})