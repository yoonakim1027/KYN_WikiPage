import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import courses from '../datas'
import { WikiContext } from '../../context/WikiContext'
import Modal from '../../components/Modal'
import WikiList from '../../components/Home/WikiList'
import AddWikiButton from '../../components/Home/AddWikiButton'
import { toast } from 'react-toastify'
import Pagination from '../../components/Pagination'
import Button from '../../components/Button'

function HomePage() {
  const { wikiTitles, setWikiTitles } = useContext(WikiContext)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = wikiTitles.slice(indexOfFirstItem, indexOfLastItem)

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleAddWiki = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newTitle || !newDescription) {
      toast.error('제목과 내용을 모두 입력해주세요.')
      return
    }
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
      <div className="flex justify-end">
        <Button onClick={handleAddWiki} title={'추가'} />
      </div>
      <WikiList wikiTitles={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={wikiTitles.length}
        paginate={paginate}
      />
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
