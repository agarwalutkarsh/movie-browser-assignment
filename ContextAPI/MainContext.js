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