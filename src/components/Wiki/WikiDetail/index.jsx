import React from 'react'

const WikiDetail = ({ wikiDetail, onEdit }) => {
  return (
    <div className="section-area flex justify-center mx-5 mt-10">
      <div className="section w-full max-w-4xl min-w-lg">
        <div className="section-header flex flex-col items-start justify-center gap-4">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-blue-500">
            {wikiDetail.title}
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            {wikiDetail.description}
          </h3>
          <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">
            {wikiDetail.detail}
          </h3>
        </div>
        <button onClick={onEdit} className="mt-4 text-lg teritary-btn">
          수정
        </button>
      </div>
    </div>
  )
}

export default WikiDetail
