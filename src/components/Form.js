import React, { useState } from 'react'

const initialState = { title: "" }

const Form = ({ addItem }) => {

    const [newItem, setNewItem] = useState(initialState)

    function handleChange(e) {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit() {
        addItem(newItem)
        setNewItem(initialState)
    }

    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder='Your Todo'
                onChange={handleChange}
                value={newItem.title}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Form