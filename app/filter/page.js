"use Client"

// import { getMoviesByFilter } from '@/ApiService/MoviesApi'

import MobileFilterPage from '@/components/MobileFilterPage'
import MobileSearchComp from '@/components/MobileSearchComp'
import WebFilters from '@/components/WebFilters'
import React from 'react'

const FilterPage = () => {


    return (
        <div className='mt-8'>
            <div className='block md:hidden'>
                <MobileSearchComp />
                <MobileFilterPage />
            </div>
            <div className='hidden md:block'>
                <WebFilters />
            </div>
        </div>
    )
}

export default FilterPage