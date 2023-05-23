import React from 'react'

const List = ({ data }) => {
    return (
        <ul>
            {
                data.map(item =>
                    <li key={item.id}>{item.title}</li>
                )
            }
        </ul>
    )
}

export default List
