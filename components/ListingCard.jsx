"use client"

import { MainContext } from '@/ContextAPI/MainContext'
import { imageUrlGenerator } from '@/HelperFunctions'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { FaClock, FaHeart, FaStar } from 'react-icons/fa'


const ListingCard = ({ data }) => {

    // States
    const [liked, setLiked] = useState(false)
    const [watchedLater, setWatchedLater] = useState(false)
    const router = useRouter()

    // Main Context
    const mainContext = useContext(MainContext)

    // Add to Playlist Function
    const addToPlaylist = (data, type) => {
        const localStorageArr = JSON.parse(localStorage?.getItem(type)) ?? []
        type === 'liked' ? mainContext?.setLiked(data) : mainContext?.setWatchLater(data)
        if (checkIfPresent(data, type)) {
            const remainingArr = localStorageArr?.filter(item => item?.id !== data?.id)
            localStorage?.setItem(type, JSON.stringify(remainingArr))
            stateChanger(data, type)
        } else {
            localStorageArr?.push(data)
            localStorage?.setItem(type, JSON.stringify(localStorageArr))
            stateChanger(data, type)
        }
    }


    // Checking if already present in playlisy
    const checkIfPresent = (data, type) => {
        const localStorageArr = JSON.parse(localStorage?.getItem(type)) ?? []
        const found = localStorageArr?.filter(item => item?.id === data?.id)?.length !== 0
        return found
    }

    // State Handler
    const stateChanger = (data, type) => {
        type === 'liked' && checkIfPresent(data, type) ? setLiked(true) : setLiked(false)
        type === 'watchlater' && checkIfPresent(data, type) ? setWatchedLater(true) : setWatchedLater(false)
    }


    // Routing to details page
    const detailsFunction = (id) => {
        router?.push(`/moviedetail?id=${id}`)
    }

    return (
        <div className='mx-auto'>
            {/* Card Image */}
            <Image className='mt-10 rounded-xl hover:cursor-pointer' width={400} height={100} alt={data?.title} src={imageUrlGenerator(data?.poster_path)} onClick={() => detailsFunction(data?.id)} />
                {/* Card Info */}
            <div className='mt-2'>
                <p className='text-xl mb-4 font-semibold'>{data?.title}</p>
                <div className='flex'>
                    <FaHeart className={`text-sm md:text-xl mr-2 hover:cursor-pointer ${(liked || checkIfPresent(data, 'liked')) ? 'text-red-500' : 'text-white'} `} onClick={() => addToPlaylist(data, 'liked')} />
                    <FaClock className={`text-sm md:text-xl mr-2 hover:cursor-pointer ${(watchedLater || checkIfPresent(data, 'watchlater')) ? 'text-blue-500' : 'text-white'} `} onClick={() => addToPlaylist(data, 'watchlater')} />
                </div>
                <p className='text-gray-400 flex text-sm md:text-base'><FaStar className='text-yellow-400 my-auto mr-1' /> {Number(data?.vote_average).toFixed(1)}</p>
                <p className='text-gray-400 text-sm md:text-base'>{moment(data?.release_date).format('MMM DD, YYYY')}</p>
            </div>
        </div>
    )
}

export default ListingCard