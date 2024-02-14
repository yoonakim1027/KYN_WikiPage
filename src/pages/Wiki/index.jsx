import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import courses from '../datas'
import { WikiContext } from '../../context/WikiContext'
import WikiDetail from '../../components/Wiki/WikiDetail'
import WikiEditForm from '../../components/Wiki/WikiEditForm'
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
        <div>
          <WikiEditForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            detail={detail}
            setDetail={setDetail}
            onSave={handleSave}
          />
        </div>
      ) : (
        <WikiDetail wikiDetail={wikiDetail} onEdit={handleEdit} />
      )}
    </div>
  )
}

export default WikiPage
