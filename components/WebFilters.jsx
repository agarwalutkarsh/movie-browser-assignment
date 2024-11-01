"use client"
import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext, useState } from 'react'
import GenreTab from './GenreTab'
import { useRouter } from 'next/navigation'
import moment from 'moment'

const WebFilters = () => {

    // Context, state and router
    const mainContext = useContext(MainContext)
    const [dateError, setDateError] = useState('')
    const router = useRouter()

    // Search Button Handler
    const searchButtonHandler = () => {
        const startDate = moment(mainContext?.filterObject?.['primary_release_date.gte'] ?? '')
        const endDate = moment(mainContext?.filterObject?.['primary_release_date.lte'] ?? '')
        if (startDate?.isValid() && endDate?.isValid() && !startDate?.isBefore(endDate)) {
            setDateError('End Date should not be before Start Date')
            return
        } else {
            setDateError('')
        }
        // routing to filter page
        router?.push('/filteredMovieList')
    }

    // input change handler
    const onChangeHandler = (e) => {
        const value = e.target.value
        const name = e.target.name
        value !== '' && mainContext?.setFilterObject(prev => ({ ...prev, [name]: value }))
    }


    return (
        <div className='p-5 w-full'>
            <div className='flex'>
                <p className='text-left text-5xl mb-4'>Filters</p>
                <div className='w-full items-end'>
                    <button
                        className="float-right w-1/6 mt-1 p-3 bg-[#2A464B] hover:bg-[#14525E] rounded-lg"
                        onClick={searchButtonHandler}
                    >Search</button>
                    <p className='float-right mt-3 mr-4 text-red-400'>{dateError}</p>
                </div>
            </div>
            <hr className='my-6' />
            <p className='text-left text-2xl mb-4'>Genres</p>
            {/* Genres */}
            <GenreTab />
            <hr className='my-6' />

            {/* Rating */}
            <p className='text-left text-2xl mb-4'>Minimum Rating</p>
            <input name='vote_average.gte' type='number' className='bg-[#0A272D] w-1/3 p-6 rounded-lg' placeholder='Enter the minimum rating' onChange={(e) => onChangeHandler(e)} />
            <hr className='my-6' />

            {/* Date */}
            <p className='text-left text-2xl mb-4'>Release Date Range<span className='text-sm ml-3'>(start date - end date)</span></p>
            <input type='date' name='primary_release_date.gte' className='bg-[#0A272D] w-1/3 p-6 rounded-lg mr-2' onChange={(e) => onChangeHandler(e)} />
            <input type='date' name='primary_release_date.lte' className='bg-[#0A272D] w-1/3 p-6 rounded-lg ml-2' onChange={(e) => onChangeHandler(e)} />
            <hr className='my-6' />


        </div>
    )
}

export default WebFilters