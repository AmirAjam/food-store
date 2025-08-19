import React from 'react'

const AdminButton = ({ text, danger,onClick }) => {
    return (
        <button onClick={onClick}
         className={`${danger ? "bg-red-600 hover:bg-red-800" : "bg-sky-600 hover:bg-sky-800"}
         duration-300 text-white py-1 px-3 text-sm rounded-sm cursor-pointer pb-2`}>
            {text}
        </button>
    )
}

export default AdminButton