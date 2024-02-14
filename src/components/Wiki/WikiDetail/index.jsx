import React from 'react'

const WikiDetail = ({ wikiDetail, onEdit }) => {
  return (
    <div className="section-area flex justify-center">
      <div className="section w-full max-w-4xl min-w-lg">
        <div className="section-header flex flex-col items-start justify-center gap-4">
          <p className="font-medium text-blue-500">{wikiDetail.title}</p>
          <h3 className="text-2xl font-semibold">{wikiDetail.description}</h3>
          <h3 className="text-xl font-semibold">{wikiDetail.detail}</h3>
        </div>
        <button onClick={onEdit} className="mt-4 text-lg teritary-btn">
          수정
        </button>
      </div>
    </div>
  )
}

export default WikiDetail
