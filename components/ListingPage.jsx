"use client"
import { getPopularMovies, getSearchedMovie, getUpcomingMovies } from '@/ApiService/MoviesApi'
import React, { useContext, useEffect, useState } from 'react'
import ListingCard from './ListingCard'
import { MainContext } from '@/ContextAPI/MainContext'
import Tabs from './Tabs'

const ListingPage = () => {

    // States
    const [movieList, setMovieList] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [hasMorePage, setHasMorePage] = useState(true)
    const [selectedTab, setSelectedTab] = useState('Popular')
    const [loading, setLoading] = useState(false)

    // Main Context
    const mainContext = useContext(MainContext)

    // Fetching movies API function
    const fetchMovies = (page) => {
        setLoading(true)
        if (mainContext?.search === '') {
            const movies = selectedTab === 'Popular' ? getPopularMovies(page) : getUpcomingMovies(page)
            movies?.then(list => {
                if (selectedTab === 'Popular') {
                    setMovieList(prevList => ([...prevList, ...list?.data?.results]))
                    setUpcomingMovies([])
                } else {
                    setUpcomingMovies(prevList => ([...prevList, ...list?.data?.results]))
                    setMovieList([])
                }
                setHasMorePage(list?.data?.total_pages > page)
            }).finally(() => setLoading(false))
        } else {
            setMovieList([])
            const movies = getSearchedMovie(mainContext?.search, page)
            movies?.then(list => {
                mainContext?.setSearchList(prevList => ([...prevList, ...list?.data?.results]))
                setHasMorePage(list?.data?.total_pages > page)
            }).finally(() => setLoading(false))
        }
    }

    // fetching movies for every change in page, tabs and search
    useEffect(() => {
        fetchMovies(mainContext.contextPage)
    }, [mainContext.contextPage, mainContext?.search, selectedTab])


    // Handle scroll for infinite scrolling
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 200) {
            if (!loading && hasMorePage) {
                mainContext.setContextPage((prevPage) => prevPage + 1)
            }
        }
    }

    // Event listeners for scrollng
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loading, hasMorePage])

    return (
        <>
            {/* Tabs */}
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} setMovieList={setMovieList} />
            <h1 className=' text-3xl mx-14 mt-20 font-medium'>{mainContext?.search === '' ? `${selectedTab} Movies` : 'Search Results'}</h1>
            {/* Loader */}
            {
                loading && <p className='text-2xl text-center'>Loading...</p>
            }
            {
                [...movieList, ...upcomingMovies, ...mainContext?.searchList ?? []]?.length === 0 && !loading
                && <p className='text-xl text-center mt-20'>No Search Results Found!</p>
            }
            {/* Listing Card */}
            <div className='mt-4 mb-10 mx-10 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
                {
                    [...movieList, ...upcomingMovies, ...mainContext?.searchList ?? []]?.map((item, index) => {
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