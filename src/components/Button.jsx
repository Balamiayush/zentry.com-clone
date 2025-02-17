import React from 'react'

const Button = ({text, href}) => {
  return (
    <a href={href} className="bg-white text-[10px] text-black px-5 py-2 rounded-full">{text}</a>
  )
}

export default Button