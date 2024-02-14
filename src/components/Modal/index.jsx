import React from 'react'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  setTitle,
  description,
  setDescription,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-5 rounded z-20">
        <ModalHeader onClose={onClose} />
        <ModalBody title={title} description={description} />
        <ModalFooter
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default Modal
