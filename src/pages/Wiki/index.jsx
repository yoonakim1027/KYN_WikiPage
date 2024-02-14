import React from 'react'
import { useParams } from 'react-router-dom'
import courses from '../datas'

function WikiPage() {
  const { title } = useParams()
  const wikiDetail = courses.find(
    (course) => course.title === decodeURIComponent(title)
  )

  return (
    <div>
      {wikiDetail ? (
        <div>
          <h1>{wikiDetail.title}</h1>
          <p>{wikiDetail.description}</p>
          <div>{wikiDetail.detail}</div>
        </div>
      ) : (
        <div>죄송합니다. 해당 위키 페이지를 찾을 수 없습니다.</div>
      )}
    </div>
  )
}

export default WikiPage
