"use client"
import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext, useEffect } from 'react'
import GenreTab from './GenreTab'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const FilterSidebar = () => {

    const mainContext = useContext(MainContext)
    const router = useRouter()

    const searchButtonHandler = () => {
        console.log(mainContext?.filterObject)
        router?.push('/filteredMovieList')
    }

    const onChangeHandler = (e) => {
        const value = e.target.value
        const name = e.target.name
        value !== '' && mainContext?.setFilterObject(prev => ({ ...prev, [name]: value }))
    }


    return (
        <div className='p-5 w-full'>
            <div className='flex'>
                <p className='text-left text-5xl mb-4'>Filters</p>
                <button
                    className="ml-auto mr-4 w-1/6 mt-4 p-3 bg-[#2A464B] hover:bg-[#14525E] rounded-lg"
                    onClick={searchButtonHandler}
                >Search</button>
            </div>
            <hr className='my-6' />
            <p className='text-left text-2xl mb-4'>Genres</p>
            <GenreTab />
            <hr className='my-6' />

            <p className='text-left text-2xl mb-4'>Minimum Rating</p>
            <input name='vote_average.gte' type='number' className='bg-[#0A272D] w-1/3 p-6 rounded-lg' placeholder='Enter the minimum rating' onChange={(e) => onChangeHandler(e)} />
            <hr className='my-6' />

            <p className='text-left text-2xl mb-4'>Release Date Range<span className='text-sm ml-3'>(start date - end date)</span></p>
            <input type='date' name='primary_release_date.gte' className='bg-[#0A272D] w-1/3 p-6 rounded-lg mr-2' onChange={(e) => onChangeHandler(e)} />
            <input type='date' name='primary_release_date.lte' className='bg-[#0A272D] w-1/3 p-6 rounded-lg ml-2' onChange={(e) => onChangeHandler(e)} />
            <hr className='my-6' />


        </div>
    )
}

export default FilterSidebar