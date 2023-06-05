require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const DATABASE = process.env.DATABASE
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

//db connection

async function main() {
    await mongoose.connect(DATABASE);
    console.log("Connected to the database");
}


main().catch(err => console.log(err))

const listRouter = require('./routes/list')
app.use('/todo', listRouter.router)

app.listen(PORT, () => {
    console.log("server started")
})
