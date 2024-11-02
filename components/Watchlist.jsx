"use client"

import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import ListingCard from './ListingCard'

const Watchlist = () => {
    // Watchlist for favourite movies and watchlater movies

    // State, Params
    const searchParams = useSearchParams()
    const type = searchParams?.get('type')
    const [movieList, setMovieList] = useState([])


    // Getting the list from the local storage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const movieArr = type === 'liked' ? JSON.parse(localStorage.getItem('liked')) || [] : JSON.parse(localStorage.getItem('watchlater')) || []
            setMovieList(movieArr)
        }
    }, [type])

    return (
        // Loader
        <Suspense fallback={<div>Loading...</div>}>
            {/* Watchlist display */}
            <div>
                <p className='text-3xl font-normal mt-12'>{type === 'liked' ? 'Liked Movies' : 'Watch Later'}</p>
                {[...movieList]?.length === 0 && <p className='text-xl text-center mt-20'>Please Add Your {type === 'liked' ? 'Liked Movies' : 'Watch Later'} Here!</p>}
                <div className='mt-4 mb-10 mx-10 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
                    {
                        [...movieList || []].map((item, index) => {
                            return (
                                <ListingCard key={index} data={item} />
                            )
                        })
                    }
                </div>
            </div>
        </Suspense>
    )
}

export default Watchlist