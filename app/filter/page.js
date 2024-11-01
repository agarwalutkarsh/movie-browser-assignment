
import MobileFilterPage from '@/components/MobileFilterPage'
import MobileSearchComp from '@/components/MobileSearchComp'
import WebFilters from '@/components/WebFilters'
import Head from 'next/head'
import React from 'react'

const FilterPage = () => {


    return (
        <>
            <Head>
                <title>Filter Page for the Movie Browser </title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Filters page based on Genres, Rating and Year of Release based on TMDB." />
            </Head>
            <div className='mt-8'>
                <div className='block md:hidden'>
                    <MobileSearchComp />
                    <MobileFilterPage />
                </div>
                <div className='hidden md:block'>
                    <WebFilters />
                </div>
            </div>
        </>
    )
}

export default FilterPage