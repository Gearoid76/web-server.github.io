const express = require('express')

const app= express()

app.get('',(req,res)=>{
    res.send('<h1> Hello hello </h1>') //html
})

app.get('/help', (req, res) =>{
    res.send([{
        name: 'Andrew',
        age: 36
    },{
        name: 'Sarah',
        age: 22
    }
])

app.get('/about',(req,res)=> {
    res.send('about page here we go')
})

app.get('/weatherapp',(req,res) =>{
    res.send('This is the weather app')
})


//app.com
//app.com/help
//app.com/about

app.listen(3000,() => {
        console.log('server is up on port 3000')

})