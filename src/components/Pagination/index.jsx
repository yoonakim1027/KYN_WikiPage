import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number} className="list-none">
            <a
              onClick={(e) => {
                e.preventDefault()
                paginate(number)
              }}
              href="#"
              className="text-blue-500 hover:text-blue-600"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
