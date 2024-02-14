import React from 'react'
import { Link } from 'react-router-dom'
const WikiList = ({ wikiTitles }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-4" data-aos="fade-up">
      <ul className="divide-y divide-gray-200">
        {wikiTitles.map((course, index) => (
          <li
            key={index}
            className={`p-4 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'} hover:bg-blue-200 transition duration-300`}
          >
            <div className="flex items-center ">
              <Link
                to={`/wiki/${encodeURIComponent(course.title)}`}
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                {course.title}
              </Link>
            </div>
            <p className="text-gray-600">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WikiList
