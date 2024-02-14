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
    <div className="flex justify-center w-full">
      <div className="w-full max-w-4xl min-w-lg">
        <form
          onSubmit={onSave}
          className="flex flex-col items-center gap-4" // 수정: items-start 대신 items-center 사용
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input bg-white border border-gray-300 rounded p-2 w-full" // w-1/2 대신 w-full 사용
            placeholder="제목"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea bg-white border border-gray-300 rounded p-2 w-full" // w-1/2 대신 w-full 사용
            placeholder="설명"
            required
          />
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="textarea bg-white border border-gray-300 rounded p-2 w-full" // w-1/2 대신 w-full 사용
            placeholder="디테일"
            required
          />
          <button type="submit" className="teritary-btn w-full">
            저장
          </button>
        </form>
      </div>
    </div>
  )
}

export default WikiEditForm
