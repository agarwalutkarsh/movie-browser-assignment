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
            <p className='text-md font-medium text-left p-2'>Search</p>
            <div className='flex w-full '>
                <input onChange={(e) => searchHandler(e)} placeholder='Search for movie...' className='bg-[#0A272D] w-full rounded-lg p-4'></input>
            </div>
            {
                <div className={`${mainContext?.search === '' ? 'hidden' : ''}`}>
                    <ListingPage />
                </div>
            }
            {/* {
                mainContext?.search !== '' &&
                <ListingPage />
            } */}
        </>
    )
}

export default MobileSearchComp