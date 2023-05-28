const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const lists = data.items

exports.get = (req, res) => {
    res.status(202).json(lists)
}

exports.getById = (req, res) => {
    const id = +req.params.id
    const item = lists.find(todo => todo.id === id)
    res.status(202).json(item)
}

exports.post = (req, res) => {
    lists.push(req.body)
    res.status(201).json()
}

exports.put = (req, res) => {
    const id = +req.params.id
    const item = lists.find(todo => todo.id === id)
    lists.splice(item, 1, { ...req.body, id: id })
    res.status(201).json()
}

exports.patch = (req, res) => {
    const id = +req.params.id
    const item = lists.find(todo => todo.id === id)
    const oldItem = lists[item]
    lists.splice(item, 1, { ...oldItem, ...req.body, id: id })
    res.status(201).json()
}

exports.remove = (req, res) => {
    const id = +req.params.id
    const item = lists.find(todo => todo.id === id)
    const oldItem = lists[item]
    lists.splice(item, 1)
    res.status(200).json()
}