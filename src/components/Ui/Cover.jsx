import React from 'react'

const Cover = ({ onClick, coverStatus }) => {
  return (
    <div onClick={onClick} className={`inset-0 fixed bg-black/40 dark:bg-black/50 z-30 
      ${coverStatus ? "block" : "hidden"}`}></div>
  )
}

export default Cover