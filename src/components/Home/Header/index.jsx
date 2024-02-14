import React from 'react'

const Header = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
        <a className="w-24 h-full" href="/">
          KYN_WikiPage
        </a>
        <div className="flex items-center justify-end gap-2">
          <a href="/">
            <button className="h-10 px-4 font-medium bg-white rounded-lg hover:bg-slate-50 hover:duration-100">
              Home
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
    </div>
  )
}

export default Header
