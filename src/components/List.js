import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

const List = ({ data, deleteItem, editItem }) => {

    function handleDelete(id) {
        deleteItem(id)
    }

    function handleEdit(id) {
        editItem(id)
    }

    return (
        <ul>
            {
                data.map(item =>
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div onClick={() => handleDelete(item.id)}><AiOutlineDelete /></div>
                        <div onClick={() => handleEdit(item.id)}><BiEdit /></div>
                    </div>
                )
            }
        </ul>
    )
}

export default List
