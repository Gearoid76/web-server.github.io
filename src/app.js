const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../publc')

app.set ('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {  // using render for hbs  as apposed to send for ht
    res.render('index', { 
        title: 'Weather App',
        name: 'Carlos'
    })
})

app.get('/help',(req,res)=> {
    res.send([{
        name:'harry',
        age: 23
    },
    {
        name:'Harry',
        age: 44
        
    }])
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