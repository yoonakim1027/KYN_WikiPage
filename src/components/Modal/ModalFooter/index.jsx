export const ModalFooter = ({
  onSubmit,
  title,
  setTitle,
  description,
  setDescription,
  onClose,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="설명"
        className="w-full p-2 border border-gray-300 rounded h-40"
        required
      />
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          취소
        </button>
        <button
          onClick={onSubmit}
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          저장
        </button>
      </div>
    </form>
  )
}
