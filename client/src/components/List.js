import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

const List = ({ data, setData, editItem }) => {

    return (
        <div className='list-container'>
            <ul >
                {
                    data.map(item =>
                        <div key={item.id} className='item'>
                            <div>{item.title}</div>
                            <div className="icons">
                                <div onClick={() => editItem(item.id)}><BiEdit /></div>
                                <div className='delete-icon' onClick={() => setData(item.id)}><AiOutlineDelete /></div>
                            </div>
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default List
