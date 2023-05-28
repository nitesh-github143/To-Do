const express = require('express')
const router = express.Router()
const list = require('../controller/list')

router
    .get('/', list.get)
    .post('/', list.post)
    .get('/:id', list.getById)
    .put('/:id', list.put)
    .patch('/:id', list.patch)
    .delete('/:id', list.remove)

exports.router = router