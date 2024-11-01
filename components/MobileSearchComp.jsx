"use client"

import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext, useEffect, useState } from 'react'
import ListingPage from './ListingPage'

const MobileSearchComp = () => {
    // States and Context
    const mainContext = useContext(MainContext)
    const [localSearch, setLocalSearch] = useState('')

    const searchHandler = (e) => {
        const value = e.target.value
        setLocalSearch(value)
    }

    // Debouncer for the api calling optimization
    useEffect(() => {
        const debounce = setTimeout(() => {
            mainContext?.setSearch(localSearch)
            mainContext.setContextPage(1)
            mainContext.setSearchList([])
        }, 600)

       return () => clearTimeout(debounce)
    }, [localSearch])

    return (
        <>
            <p className='text-left text-2xl mb-4'>Search</p>
            <div className='flex w-full '>
                {/* Search input */}
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