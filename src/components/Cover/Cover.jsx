import React from 'react'

const Cover = ({onClick,isShow}) => {
  return (
    <div onClick={onClick} className={`inset-0 bg-black/60 z-30 ${isShow ? "fixed" : "hidden"}`}></div>
  )
}

export default Cover