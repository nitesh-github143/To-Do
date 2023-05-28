const express = require('express')
const app = express()

app.use(express.json())

const port = 3000

const listRouter = require('./routes/list')

app.use('/todo', listRouter.router)

app.listen(port, () => {
    console.log("server started")
})



