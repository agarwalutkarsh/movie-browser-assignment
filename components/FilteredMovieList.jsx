"use client"

import { getMoviesByFilter } from '@/ApiService/MoviesApi'
import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext, useEffect, useState } from 'react'
import ListingCard from './ListingCard'

const FilteredMovieList = () => {

    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [hasMorePage, setHasMorePage] = useState(true)

    const mainContext = useContext(MainContext)
    useEffect(() => {
        setLoading(true)
        console.log(mainContext?.filterObject)
        const list = getMoviesByFilter(mainContext?.filterObject, page)
        list?.then((data) => {
            console.log(data?.data?.results)
            setMovieList(prevList => ([...prevList, ...data?.data?.results]))
            setHasMorePage(data?.data?.total_pages > page)
        }).finally(() => setLoading(false))
    }, [page])

    const handleScroll = () => {
        console.log(hasMorePage)
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 200) {
            if (!loading && hasMorePage) {
                setPage((prevPage) => prevPage + 1)
            }
        }
    }

    useEffect(() => {
        console.log('Scroll use effect')
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loading, hasMorePage])

  return (
    <div>
        <>
            <h1 className=' text-3xl mx-14 font-medium'>Filtered Results</h1>
            {
                loading && <p className='text-2xl text-center'>Loading...</p>
            }
            <div className='mt-20 mb-10 mx-10 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
                {
                     [...movieList ?? []]?.map((item, index) => {
                        return (
                            <ListingCard key={index} data={item} />
                        )
                    })
                }
            </div>

        </>
        
    </div>
  )
}

export default FilteredMovieList