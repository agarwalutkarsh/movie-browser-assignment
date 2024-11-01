"use client"

import { MainContext } from '@/ContextAPI/MainContext'
import { imageUrlGenerator } from '@/HelperFunctions'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaClock, FaHeart } from 'react-icons/fa'


const ListingCard = ({ data }) => {

    const [liked, setLiked] = useState(false)
    const [watchedLater, setWatchedLater] = useState(false)
    const router = useRouter()

    const mainContext = useContext(MainContext)

    const addToLiked = (data) => {
        const localStorageLikedArr = JSON.parse(localStorage?.getItem('liked')) ?? []
        mainContext?.setLiked(data)
        if (checkIfLiked(data)) {
            //remove
            const remainingArr = localStorageLikedArr?.filter(item => item?.id !== data?.id)
            localStorage?.setItem('liked', JSON.stringify(remainingArr))

            stateChangeLiked(data)

        }
        else {
            localStorageLikedArr?.push(data)
            localStorage?.setItem('liked', JSON.stringify(localStorageLikedArr))

            stateChangeLiked(data)
        }
    }
    const addToWatchLater = (data) => {
        const localStorageWatchLaterArr = JSON.parse(localStorage?.getItem('watchlater')) ?? []
        mainContext.setWatchLater(data)
        if (checkIfWatchLater(data)) {
            //remove
            const remainingArr = localStorageWatchLaterArr?.filter(item => item?.id !== data?.id)
            localStorage?.setItem('watchlater', JSON.stringify(remainingArr))
            // data?.id === selected && setSelected('')
            stateChangerWL(data)
            // setLiked(false)
        }
        else {
            localStorageWatchLaterArr?.push(data)
            localStorage?.setItem('watchlater', JSON.stringify(localStorageWatchLaterArr))
            // setSelected(data?.id)
            stateChangerWL(data)
            // setLiked(true)
        }
    }

    const checkIfLiked = (data) => {
        const localStorageLikedArr = JSON.parse(localStorage?.getItem('liked')) ?? []
        const found = localStorageLikedArr?.filter(item => item?.id === data?.id)?.length !== 0
        return found
    }
    const checkIfWatchLater = (data) => {
        const localStorageWatchLaterArr = JSON.parse(localStorage?.getItem('watchlater')) ?? []
        const found = localStorageWatchLaterArr?.filter(item => item?.id === data?.id)?.length !== 0
        return found
    }


    const stateChangeLiked = (data) => {
        checkIfLiked(data) ? setLiked(true) : setLiked(false)
    }

    const stateChangerWL = (data) => {
        checkIfWatchLater(data) ? setWatchedLater(true) : setWatchedLater(false)
    }


    const detailsFunction = (id) => {
        router?.push(`/moviedetail?id=${id}`)
    }

    return (
        <div className='mx-auto'>
            <Image className='mt-10 rounded-xl hover:cursor-pointer' width={400} height={100} alt={data?.title} src={imageUrlGenerator(data?.poster_path)} onClick={() => detailsFunction(data?.id)} />
            <div className='mt-2'>
                <p className='text-xl mb-4 font-semibold'>{data?.title}</p>
                <div className='flex'>
                    <FaHeart className={`text-sm md:text-xl mr-2 ${(liked || checkIfLiked(data)) ? 'text-red-500' : 'text-white'} `} onClick={() => addToLiked(data)} />
                    <FaClock className={`text-sm md:text-xl mr-2 ${(watchedLater || checkIfWatchLater(data)) ? 'text-blue-500' : 'text-white'} `} onClick={() => addToWatchLater(data)} />
                </div>
                <p className='text-gray-400 text-sm md:text-base'>Rating {Number(data?.vote_average).toFixed(1)}</p>
                <p className='text-gray-400 text-sm md:text-base'>{moment(data?.release_date).format('MMM DD, YYYY')}</p>
            </div>
        </div>
    )
}

export default ListingCard