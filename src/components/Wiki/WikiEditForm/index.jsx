import React from 'react'
const WikiEditForm = ({
  title,
  setTitle,
  description,
  setDescription,
  detail,
  setDetail,
  onSave,
}) => {
  return (
    <div className="flex justify-center w-full px-5 mt-20">
      <div className="w-full max-w-4xl">
        <form onSubmit={onSave} className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white border border-gray-300 rounded p-2 w-full sm:w-3/4 lg:w-1/2 text-base sm:text-lg"
            placeholder="제목"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-white border border-gray-300 rounded p-2 w-full sm:w-3/4 lg:w-1/2 h-24 text-base sm:text-lg"
            placeholder="설명"
            required
          />
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="bg-white border border-gray-300 rounded p-2 w-full sm:w-3/4 lg:w-1/2 h-32 text-base sm:text-lg"
            placeholder="디테일"
            required
          />
          <button
            type="submit"
            className="teritary-btn w-full sm:w-3/4 lg:w-1/2 text-base sm:text-lg"
          >
            저장
          </button>
        </form>
      </div>
    </div>
  )
}

export default WikiEditForm
