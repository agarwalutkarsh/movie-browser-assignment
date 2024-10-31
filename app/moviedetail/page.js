import MovieDetails from '@/components/MovieDetails'
import React, { Suspense } from 'react'

const MovieDetailPage = () => {
  return (
    <Suspense fallback={<div><p>Loading</p></div>}>
        <MovieDetails />
    </Suspense >
  )
}

export default MovieDetailPage