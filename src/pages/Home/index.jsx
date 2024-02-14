import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import courses from '../datas'
function HomePage() {
  const [wikiTitles, setWikiTitles] = useState([])

  useEffect(() => {
    setWikiTitles(courses)
  }, [])

  return (
    <div>
      <h1>위키 제목 목록</h1>
      <ul>
        {wikiTitles.map((course, index) => (
          <li key={index}>
            <Link to={`/wiki/${encodeURIComponent(course.title)}`}>
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
