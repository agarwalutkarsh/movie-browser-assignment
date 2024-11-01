"use client"

import { MainContext } from '@/ContextAPI/MainContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { FaHeart, FaFilter, FaClock } from 'react-icons/fa';

const NavBar = () => {
    const mainContext = useContext(MainContext)
    const [localSearch, setLocalSearch] = useState('')
    const router = useRouter()

    const searchHandler = (e) => {
        router.push('/')
        const value = e.target.value
        setLocalSearch(value)
    }

    useEffect(() => {
        const debouce = setTimeout(() => {
            mainContext?.setSearch(localSearch)
            mainContext.setContextPage(1)
            mainContext.setSearchList([])
        }, 600)

        return () => clearTimeout(debouce)
    }, [localSearch])

    return (

        <div className="z-30 hidden sm:flex fixed top-0 w-full bg-[#0A272D] text-white py-3 px-6 justify-between items-center">
            {/* Logo / Title */}
            <Link href='/'><div className="text-lg font-medium">Movie Browser</div></Link>

            {/* Search Bar */}
            <div className="flex items-center bg-[#0A2A2F] px-3 py-2 rounded-lg w-full max-w-md border-2 border-white">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                    onChange={(e) => searchHandler(e)}
                />
            </div>

            {/* Icons */}
            <div className="flex gap-5 items-center ml-4">
                <Link href='/filter'><button className="flex items-center gap-1 hover:text-gray-300" title="Filter" >
                    <FaFilter className="text-xl" />
                </button></Link>
                <Link href='/watchlist?type=liked'><button className="flex items-center gap-1 hover:text-gray-300" title="Liked">
                    <FaHeart className="text-xl" />
                </button></Link>
                <Link href='/watchlist?type=watchlater'><button className="flex items-center gap-1 hover:text-gray-300" title="Watch Later">
                    <FaClock className="text-xl" />
                </button></Link>
            </div>
        </div>
    )
}

export default NavBar;
