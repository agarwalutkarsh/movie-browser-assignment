"use client"

import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext } from 'react'
import ListingPage from './ListingPage'

const MobileSearchComp = () => {
    const mainContext = useContext(MainContext)

    const searchHandler = (e) => {
        const value = e.target.value
        mainContext?.setSearch(value)
        mainContext.setContextPage(1)
        mainContext.setSearchList([])
    }

    return (
        <>
            <p className='text-left text-2xl mb-4'>Search</p>
            <div className='flex w-full '>
                <input onChange={(e) => searchHandler(e)} placeholder='Search for movie...' className='bg-[#0A272D] w-full rounded-lg p-4'></input>
            </div>
            {
                <div className={`${mainContext?.search === '' ? 'hidden' : ''}`}>
                    {mainContext?.search !== '' && <ListingPage />}
                </div>
            }
        </>
    )
}

export default MobileSearchComp