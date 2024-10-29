"use client"
import { getPopularMovies } from '@/ApiService/MoviesApi'
// import axios from 'axios'
import React, { useEffect } from 'react'

const ListingPage = () => {

    useEffect(() => {
        const movies = getPopularMovies()
        console.log(movies)
        movies?.then(list => {
            console.log(list?.data)
        })
    }, [])

    return (
        <div>ListingPage</div>
    )
}

export default ListingPage