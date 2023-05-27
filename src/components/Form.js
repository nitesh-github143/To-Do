import React, { useEffect, useState } from 'react'

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
            addItem(newItem)
        }
        setNewItem(initialState)
    }

    useEffect(() => {
        if (editingItem) {
            setNewItem(editingItem)
        }
    }, [editingItem])

    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder='Your Todo'
                onChange={handleChange}
                value={newItem.title}
            />
            <button onClick={handleSubmit}>{editingItem ? "Edit" : "Add"}</button>
        </div>
    )
}

export default Form