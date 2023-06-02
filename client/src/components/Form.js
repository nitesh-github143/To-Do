import React, { useEffect, useState } from 'react'
import axios from 'axios'

const initialState = { title: "" }

const Form = ({ addItem, editingItem, updateItem }) => {

    const [newItem, setNewItem] = useState(initialState)

    function handleChange(e) {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit() {
        if (editingItem) {
            updateItem(newItem)
        } else {
            addTodo(newItem)

        }
        setNewItem(initialState)
    }

    useEffect(() => {
        if (editingItem) {
            setNewItem(editingItem)
        }
    }, [editingItem])

    const addTodo = async (newItem) => {
        const listItems = await axios.post('http://localhost:4000/todo', newItem)
        addItem(listItems.data)
    }


    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder='Your Todo'
                onChange={handleChange}
                value={newItem.title}
                className='input-box'
            />
            <button onClick={handleSubmit}>{editingItem ? "Edit" : "Add"}</button>
        </div>
    )
}

export default Form