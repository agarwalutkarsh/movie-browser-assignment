"use Client"

import FilterSidebar from '@/components/FilterSidebar'
// import { getMoviesByFilter } from '@/ApiService/MoviesApi'

import MobileFilterPage from '@/components/MobileFilterPage'
import MobileSearchComp from '@/components/MobileSearchComp'
import React from 'react'

const FilterPage = () => {


    return (
        <div className='mt-8'>
            <div className='block md:hidden'>
                <MobileSearchComp />
                <MobileFilterPage />
            </div>
            <div className='hidden md:block'>
                <FilterSidebar />
            </div>
        </div>
    )
}

export default FilterPage