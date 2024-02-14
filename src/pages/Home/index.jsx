import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import courses from '../datas'
import { WikiContext } from '../../context/WikiContext'
import Modal from '../../components/Modal'

function HomePage() {
  const { wikiTitles, setWikiTitles } = useContext(WikiContext)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddWiki = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newWiki = {
      id: wikiTitles.length ? wikiTitles[wikiTitles.length - 1].id + 1 : 1,
      title: newTitle,
      description: newDescription,
      detail: '',
    }
    setWikiTitles([...wikiTitles, newWiki])
    setIsModalOpen(false)
  }
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
      <button onClick={handleAddWiki}>추가</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        title={newTitle}
        setTitle={setNewTitle}
        description={newDescription}
        setDescription={setNewDescription}
      />
    </div>
  )
}

export default HomePage
