import React from 'react'

const AddWikiButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mx-5 w-full px-4 py-2 teritary-btn text-white rounded hover:bg-blue-600 focus:outline-none focus:ring transition ease-in-out duration-300 md:w-auto md:px-6"
    >
      추가
    </button>
  )
}

export default AddWikiButton
