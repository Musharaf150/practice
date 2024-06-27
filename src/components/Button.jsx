import React from 'react'

const Button = (props,color ='text-black') => {
  return (
    <button className={`${color} bg-slate-100 
    p-2 rounded-lg px-6`}>{props.title}</button>
  )
}

export default Button