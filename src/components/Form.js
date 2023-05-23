import React, { useState } from 'react'

const Form = () => {
    const [newItem, setNewItem] = useState('')
    function handleChange(e) {
        setNewItem(e.target.value)
    }
    function handleSubmit(e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder='Your Todo'
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Form