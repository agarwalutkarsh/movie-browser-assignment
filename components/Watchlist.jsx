"use client"

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ListingCard from './ListingCard'

const Watchlist = () => {

    const searchParams = useSearchParams()
    const type = searchParams?.get('type')
    const [movieList, setMovieList] = useState([])


    useEffect(() => {
        if (typeof window !== "undefined") {
            // Only access localStorage on the client side
            const movieArr = type === 'liked' ? JSON.parse(localStorage.getItem('liked')) || [] : JSON.parse(localStorage.getItem('watchlater')) || []
            setMovieList(movieArr)
        }
    }, [type])

    return (
        <div>
            {
                type === 'liked'
                    ? <div>
                        <p className='text-3xl font-normal mt-4'>Liked Movies</p>
                        {[...movieList]?.length === 0 && <p className='text-xl text-center mt-20'>Please Add Your Favourite Movies Here!</p>}
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
                    : <div>
                    <p className='text-3xl font-normal mt-4'>Watch Later</p>
                    {[...movieList]?.length === 0 && <p className='text-xl text-center mt-20'>Create Your Watch Later List!</p>}
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
            }
        </div>
    )
}

export default Watchlist