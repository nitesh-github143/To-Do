import React from 'react'

const Form = () => {
    function handleChange(e) {
        console.log(e.target.value)
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