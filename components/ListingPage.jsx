"use client"
import { getMoviesByFilter, getPopularMovies, getSearchedMovie } from '@/ApiService/MoviesApi'
// import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ListingCard from './ListingCard'
import { MainContext } from '@/ContextAPI/MainContext'

const ListingPage = () => {

    const [movieList, setMovieList] = useState([])
    const [hasMorePage, setHasMorePage] = useState(true)
    // const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const mainContext = useContext(MainContext)

    const fetchMovies = (page) => {
        setLoading(true)
        if (mainContext?.search === '') {
            const movies = getPopularMovies(page)
            console.log(movies)
            movies?.then(list => {
                console.log(list?.data)
                setMovieList(prevList => ([...prevList, ...list?.data?.results]))
                if (page === 1) {
                    mainContext.setCarouselMovieArr([...list?.data?.results?.slice(0, 5)])
                }
                setHasMorePage(list?.data?.total_pages > page)
            }).finally(() => setLoading(false))
        } else {
            setMovieList([])
            const movies = getSearchedMovie(mainContext?.search, page)
            console.log(movies)
            movies?.then(list => {
                console.log(list?.data)
                mainContext?.setSearchList(prevList => ([...prevList, ...list?.data?.results]))
                setHasMorePage(list?.data?.total_pages > page)
            }).finally(() => setLoading(false))
        }
    }

    useEffect(() => {
        fetchMovies(mainContext.contextPage)
    }, [mainContext.contextPage, mainContext?.search])


    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 200) {
            if (!loading && hasMorePage) {
                mainContext.setContextPage((prevPage) => prevPage + 1)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loading, hasMorePage])

    return (
        <>
            <h1 className=' text-3xl mx-14 mt-20 font-medium'>{mainContext?.search === '' ? 'Popular Movies' : 'Search Results'}</h1>
            {
                loading && <p className='text-2xl text-center'>Loading...</p>
            }
            <div className='mt-4 mb-10 mx-10 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
                {
                     [...movieList, ...mainContext?.searchList ?? []]?.map((item, index) => {
                        return (
                            <ListingCard key={index} data={item} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default ListingPage