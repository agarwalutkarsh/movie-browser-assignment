"use client"
import { MainContext } from '@/ContextAPI/MainContext'
import React, { useContext, useState } from 'react'

const GenreTab = () => {
    const mainContext = useContext(MainContext)
    const [selectedTag, setSelectedTag] = useState('')

    const setGenreHandler = (id) => {
        console.log(mainContext?.filterObject)
        setSelectedTag(id)
        mainContext?.setContextPage(1)
        mainContext?.setFilterObject({
            with_genres: id
        })
    }

    return (
        <div className=' grid grid-cols-2 md:grid-cols-5 w-full gap-2 md:gap-5'>
            {
                mainContext?.genreList?.map(item => {
                    return (
                        <button key={item?.id} className={`${item?.id === selectedTag ? 'bg-[#14525E]' : 'bg-[#0A272D] md:bg-[#2A464B]'}  md:text-sm hover:bg-[#14525E] rounded-lg text-white text-center p-3 md:p-10`}
                        onClick={() => setGenreHandler(item?.id)}>{item?.name}</button>
                    )
                })
            }
        </div>
    )
}

export default GenreTab