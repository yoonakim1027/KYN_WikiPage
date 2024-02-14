import React, { createContext, useState } from 'react'

export const WikiContext = createContext(null)

export const WikiProvider = ({ children }) => {
  const [wikiTitles, setWikiTitles] = useState([])

  const updateWikiTitle = (updatedEntry) => {
    const updatedWikiTitles = wikiTitles.map((item) =>
      item.id === updatedEntry.id ? updatedEntry : item
    )
    setWikiTitles(updatedWikiTitles)
  }
  return (
    <WikiContext.Provider
      value={{ wikiTitles, setWikiTitles, updateWikiTitle }}
    >
      {children}
    </WikiContext.Provider>
  )
}
