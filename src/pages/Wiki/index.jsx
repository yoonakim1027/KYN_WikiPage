import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import courses from '../datas'
import { WikiContext } from '../../context/WikiContext'

function WikiPage() {
  const { title: urlTitle } = useParams()
  const { wikiTitles, setWikiTitles, updateWikiTitle } = useContext(WikiContext)

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [detail, setDetail] = useState('')

  const wikiDetail = courses.find(
    (course) => course.title === decodeURIComponent(urlTitle)
  )

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = (event) => {
    event.preventDefault()

    const updatedCourse = {
      id: wikiDetail.id,
      title,
      description,
      detail,
    }

    updateWikiTitle(updatedCourse)
    setEditMode(false)
  }
  useEffect(() => {
    if (wikiDetail) {
      setTitle(wikiDetail.title)
      setDescription(wikiDetail.description)
      setDetail(wikiDetail.detail)
    }
  }, [wikiDetail])

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <button type="submit">저장</button>
        </form>
      ) : (
        wikiDetail && (
          <div>
            <h1>{wikiDetail.title}</h1>
            <p>{wikiDetail.description}</p>
            <div>{wikiDetail.detail}</div>
            <button onClick={handleEdit}>수정</button>
          </div>
        )
      )}
    </div>
  )
}

export default WikiPage
