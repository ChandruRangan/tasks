const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
const func1 = (req, res, next) => {
    console.log('inside func1')
    if(req.body && req.body.name === 'sandy')
    next()
    else 
    throw new Error('invalid Scema')
    // res.status(400).send('error');
}

const func2 = (req, res, next) => {
    console.log('inside func2')
    req.body = {name: "Sandy"}

    next()
}

const func3 = (req, res, next) => {
    console.log('inside func3')

    next()
}

const response = (a, b)=>  {
    console.log('inside response')
    b.send({result: "succ", data: a.body})
}


app.get('/test', func1, func2, func3, response);


app.listen(1000);