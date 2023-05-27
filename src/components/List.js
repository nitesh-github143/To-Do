import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

const List = ({ data, deleteItem, editItem }) => {

    return (
        <ul>
            {
                data.map(item =>
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div onClick={() => deleteItem(item.id)}><AiOutlineDelete /></div>
                        <div onClick={() => editItem(item.id)}><BiEdit /></div>
                    </div>
                )
            }
        </ul>
    )
}

export default List
