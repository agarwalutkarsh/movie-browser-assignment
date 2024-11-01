"use client"
import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext } from 'react'

const Tabs = ({ selectedTab, setSelectedTab }) => {
    // Tabs for Popular and Upcoming Movies
    const mainContext = useContext(MainContext)
    const tabsData = [
        {
            name: 'Popular',
            value: 'Popular'
        },
        {
            name: 'Upcoming',
            value: 'Upcoming'
        }
    ]

    const tabSelectionHandler = (value) => {
        mainContext.setContextPage(1)
        mainContext.setSearchList([])
        setSelectedTab(value)
    }

    return (
        <div className='bg-[#2A464B] mx-auto my-6 items-center p-1 rounded-xl w-max lg:w-[20%] md:flex'>
            {
                // Tabs
                tabsData?.map((item) => (
                    <h1 key={item?.value} onClick={() => tabSelectionHandler(item?.value)} className={`hover:bg-[#14525E] hover:cursor-pointer ${selectedTab === item?.value && 'bg-[#14525E]'} w-full text-center mx-auto p-2 rounded-lg text-base font-normal`}>{item?.name}</h1>
                ))
            }
        </div>
    )
}

export default Tabs