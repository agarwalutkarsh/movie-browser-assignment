
import FilteredMovieList from '@/components/FilteredMovieList'
import Head from 'next/head'
import React from 'react'

const FilteredMovieListPage = () => {
  return (
    <>
      <Head>
        <title>Filtered Movies Page for the Movie Browser </title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Filtered Movies Page based on TMDB." />
      </Head>
      <div>
        <FilteredMovieList />
      </div>
    </>
  )
}

export default FilteredMovieListPage