import React from 'react'

const Button = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="mx-5 w-full px-4 py-2 teritary-btn text-white rounded hover:bg-blue-600 focus:outline-none focus:ring transition ease-in-out duration-300 md:w-auto md:px-6"
    >
      {title}
    </button>
  )
}

export default Button
