require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const DATABASE = process.env.DATABASE
app.use(cors())
app.use(express.json())

//db connection
main().catch(err => console.log(err))

async function main() {
    await mongoose.connect(DATABASE);
    console.log("connected")
}

const listRouter = require('./routes/list')
app.use('/todo', listRouter.router)

app.listen(process.env.PORT, () => {
    console.log("server started")
})
