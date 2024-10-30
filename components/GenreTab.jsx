"use client"
import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext } from 'react'

const GenreTab = () => {
    const mainContext = useContext(MainContext)

    return (
    <div className=' grid grid-cols-2 w-full gap-2'>
        {
            mainContext?.genreList?.map(item => {
                return (
                    <button key={item?.id} className='bg-[#0A272D] hover:bg-[#14525E] rounded-lg text-white text-center p-3'>{item?.name}</button>
                )
            })
        }
    </div>
  )
}

export default GenreTab