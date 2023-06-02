const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: { type: String, required: true }
})

exports.Todo = mongoose.model('Todo', todoSchema)