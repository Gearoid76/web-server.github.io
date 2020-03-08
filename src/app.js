const express = require('express')

const app= express()

app.get('',(req,res)=>{
    res.send('<h1> Hello hello </h1>') //html
})

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