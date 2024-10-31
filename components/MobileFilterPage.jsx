"use client"

import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext } from 'react'
import GenreTab from './GenreTab'
import Link from 'next/link'

const MobileFilterPage = () => {

  const mainContext = useContext(MainContext)

  const searchButtonHandler = () => {
    console.log('hit')
    console.log(mainContext?.clearFilter)
    mainContext?.setClearFilter(false)
    // getMoviesByFilter(mainContext?.filterObject)
  }
  const onChangeHandler = (e) => {
    const value = e.target.value
    const name = e.target.name
    value !== '' && mainContext?.setFilterObject(prev => ({ ...prev, [name]: value }))
}

  return (
    <div className='p-4 items-center'>
      <p className='text-left text-2xl mb-4'>Genres</p>
      <div className='w-full '>
        <GenreTab />
        <hr className='my-6' />
        <p className='text-left text-2xl mb-4'>Minimum Rating</p>
        <input name='vote_average.gte' type='number' className='bg-[#0A272D] w-full md:w-1/3 p-3 md:p-6 rounded-lg' placeholder='Enter the minimum rating' onChange={(e) => onChangeHandler(e)} />
        <hr className='my-6' />

        <p className='text-left text-2xl mb-4'>Release Date Range<span className='text-sm ml-3'>(start date - end date)</span></p>
        <input type='date' name='primary_release_date.gte' className='bg-[#0A272D] w-[45%] md:w-1/3 p-2 md:p-6 rounded-lg mr-2' onChange={(e) => onChangeHandler(e)} />
        <input type='date' name='primary_release_date.lte' className='bg-[#0A272D] w-[45%] md:w-1/3 p-2 md:p-6 rounded-lg ml-2' onChange={(e) => onChangeHandler(e)} />
        <Link href='/filteredMovieList'>
          <button
            className="mx-auto w-full mt-4 p-3 bg-[#2A464B] hover:bg-[#14525E] rounded-lg"
            onClick={searchButtonHandler}
          >Search</button></Link>
      </div>
    </div>
  )
}

export default MobileFilterPage