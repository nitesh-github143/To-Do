const fs = require('fs')
const model = require('../model/list')
const Todo = model.Todo

//get
exports.get = async (req, res) => {
    const allTodo = await Todo.find()
    res.status(202).json(allTodo)
}

//get by id
exports.getById = async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findById(id)
    res.status(202).json(todo)
}

//create
exports.post = async (req, res) => {
    const todo = new Todo(req.body)
    await todo.save()
    res.status(201).json(todo)
}

exports.put = (req, res) => {
    const id = +req.params.id
    const item = lists.find(todo => todo.id === id)
    lists.splice(item, 1, { ...req.body, id: id })
    res.status(201).json()
}


//update
exports.patch = async (req, res) => {
    const id = req.params.id
    const doc = await Todo.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.status(201).json(doc)
}

//delete
exports.remove = async (req, res) => {
    const id = req.params.id;
    const doc = await Todo.findOneAndDelete({ _id: id })
    res.status(201).json(doc);
}