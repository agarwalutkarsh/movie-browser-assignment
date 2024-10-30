"use client"
import React, { createContext, useState } from 'react'

export const MainContext = createContext()

const MainContextWrapper = ({children}) => {

    const [carouselMovieArr, setCarouselMovieArr] = useState([])
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const [contextPage, setContextPage] = useState(1)

    const state = {
        carouselMovieArr,
        search,
        contextPage,
        searchList,
        setCarouselMovieArr,
        setSearch,
        setContextPage,
        setSearchList
    }

  return (
    <MainContext.Provider value={{...state}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextWrapper