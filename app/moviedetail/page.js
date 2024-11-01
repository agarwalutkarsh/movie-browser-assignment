import MovieDetails from '@/components/MovieDetails'
import Head from 'next/head'
import React, { Suspense } from 'react'

const MovieDetailPage = () => {
    return (
        <>
            <Head>
                <title>Movie Detail for the Movie Browser </title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Movie Details based on TMDB." />
            </Head>
            <Suspense fallback={<div><p>Loading</p></div>}>
                <MovieDetails />
            </Suspense >
        </>
    )
}

export default MovieDetailPage