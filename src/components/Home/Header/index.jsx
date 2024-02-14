import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
      <a className="w-24 h-full" href="/"></a>
      <div className="flex items-center justify-end gap-2">
        <a href="/">
          <button className="h-10 px-4 font-medium bg-white rounded-lg hover:bg-slate-50 hover:duration-100">
            코딩허브 소개
          </button>
        </a>
        <a href="/content">
          <button className="h-10 px-4 font-medium bg-white rounded-lg hover:bg-slate-50 hover:duration-100">
            Contents
          </button>
        </a>
        <a href="/assessment">
          <button className="h-10 px-4 font-medium bg-white rounded-lg hover:bg-slate-50 hover:duration-100">
            Assessment
          </button>
        </a>
        <a href="/pbl">
          <button className="h-10 px-4 font-medium bg-white rounded-lg hover:bg-slate-50 hover:duration-100">
            PBL
          </button>
        </a>
      </div>
    </div>
  )
}

export default Header
