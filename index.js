const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, resp)=>{
    resp.send('hello')
})

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log("example ");
})
