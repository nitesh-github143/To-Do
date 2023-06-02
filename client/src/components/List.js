import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

const List = ({ data, deleteItem, editItem }) => {

    return (
        <div className='list-container'>
            <ul >
                {
                    data.map(item =>
                        <div key={item._id} className='item'>
                            <div>{item.title}</div>
                            <div className="icons">
                                <div onClick={() => editItem(item._id)}><BiEdit /></div>
                                <div className='delete-icon' onClick={() => deleteItem(item._id)}><AiOutlineDelete /></div>
                            </div>
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default List
