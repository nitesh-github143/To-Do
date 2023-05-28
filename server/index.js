const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const list = require('./controller/list')

app.get('/todo', list.get)
app.get('/todo/:id', list.getById)
app.post('/todo', list.post)
app.put('/todo/:id', list.put)
app.patch('/todo/:id', list.patch)
app.delete('/todo/:id', list.remove)

app.listen(port, () => {
    console.log("server started")
})



