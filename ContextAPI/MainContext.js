"use client"
import { getAllGenres, getPopularMovies } from '@/ApiService/MoviesApi'
import React, { createContext, useEffect, useState } from 'react'

export const MainContext = createContext()

const MainContextWrapper = ({ children }) => {

    // Context Api for state management

    // States
    const [carouselMovieArr, setCarouselMovieArr] = useState([])
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const [contextPage, setContextPage] = useState(1)
    const [genreList, setGenreList] = useState([])
    const [filterObject, setFilterObject] = useState({})
    const [clearFilter, setClearFilter] = useState(true)
    const [liked, setLiked] = useState([])
    const [watchLater, setWatchLater] = useState([])

    // Getting all the genres and carousell movies from on loading of the app
    useEffect(() => {
        const genre = getAllGenres()
        const carouselMovieArr = getPopularMovies(1)
        carouselMovieArr?.then((list) => {
            setCarouselMovieArr([...list?.data?.results?.slice(0, 5)])
        })
        genre?.then(resp => {
            setGenreList(resp?.data?.genres)
        })
    }, [])

    // Exporting to the application
    const state = {
        carouselMovieArr,
        search,
        contextPage,
        searchList,
        genreList,
        filterObject,
        clearFilter,
        liked,
        watchLater,
        setCarouselMovieArr,
        setSearch,
        setContextPage,
        setSearchList,
        setFilterObject,
        setClearFilter,
        setLiked,
        setWatchLater
    }

    return (
        <MainContext.Provider value={{ ...state }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextWrapper