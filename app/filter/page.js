import GenreTab from '@/components/GenreTab'
import MobileSearchComp from '@/components/MobileSearchComp'
import React from 'react'

const FilterPage = () => {
    return (
        <div className='mt-8'>
            <MobileSearchComp />
            <p className='text-md font-medium text-left p-2'>Genres</p>
            <div className='flex w-full '>
                <GenreTab />
            </div>
        </div>
    )
}

export default FilterPage