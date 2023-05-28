const express = require('express')
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const list = data.items

const app = express()
const port = 3000

app.use(express.json())

// app.use((req, res, next) => {
//     next()
// })

console.log(list)

// const auth = (req, res, next) => {
//     console.log()
//     if (req.body.pass === "123") {
//         next()
//     } else {
//         res.sendStatus(401)
//     }
// }

app.get('/lists/:id', (req, res) => {
    console.log(req.params)
    res.json({ type: "GET" })
})
app.post('/', (req, res) => {
    res.json({ type: "POST" })
})
app.put('/', (req, res) => {
    res.json({ type: "PUT" })
})
app.patch('/', (req, res) => {
    res.json({ type: "PATCH" })
})
app.delete('/', (req, res) => {
    res.json({ type: "DELETE" })
})

app.listen(port, () => {
    console.log("server started")
})



