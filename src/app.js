const express = require('express')

const app= express()

app.get('',(req,res)=>{
    res.send('Hello express')
})

app.get('/help', (req, res) =>{
    res.send('help page')
})

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