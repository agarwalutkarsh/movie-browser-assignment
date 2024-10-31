"use client"
import { getAllGenres } from '@/ApiService/MoviesApi'
import React, { createContext, useEffect, useState } from 'react'

export const MainContext = createContext()

const MainContextWrapper = ({children}) => {

    const [carouselMovieArr, setCarouselMovieArr] = useState([])
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const [contextPage, setContextPage] = useState(1)
    const [genreList, setGenreList] = useState([])
    const [filterObject, setFilterObject] = useState({})
    const [clearFilter, setClearFilter] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const onCloseSidebar = () => {
        setIsOpen(false)
    }

    const openSidebar = () => setIsOpen(true)

    useEffect(() => {
        const genre = getAllGenres()
        genre?.then(resp => {
            setGenreList(resp?.data?.genres)
        })
    }, [])

    const state = {
        carouselMovieArr,
        search,
        contextPage,
        searchList,
        genreList,
        filterObject,
        clearFilter,
        isOpen,
        setCarouselMovieArr,
        setSearch,
        setContextPage,
        setSearchList,
        setFilterObject,
        setClearFilter,
        onCloseSidebar,
        openSidebar,
        setIsOpen
    }

  return (
    <MainContext.Provider value={{...state}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextWrapper