"use client"
import { MainContext } from '@/ContextAPI/MainContext';
import Link from 'next/link';
import { useContext } from 'react';
import { FaSearch, FaHeart, FaHome, FaClock } from 'react-icons/fa';

const BottomBar = () => {
    // Bottom bar for the mobile view
    const mainContext = useContext(MainContext)

    const resetSearchHandler = () => {
        mainContext?.setSearch('')
        mainContext.setContextPage(1)
        mainContext.setSearchList([])
    }

    return (
        <>
        {/* Different Options */}
            <div className="fixed bottom-0 w-full bg-[#0A272D] text-white flex justify-around items-center py-2 sm:hidden">
                <Link href='/' onClick={resetSearchHandler} ><button className="flex flex-col items-center">
                    <FaHome className="text-xl" />
                    <span className="text-xs font-normal">Home</span>
                </button></Link>
                <Link href='/watchlist?type=liked'><button className="flex flex-col items-center">
                    <FaHeart className="text-xl" />
                    <span className="text-xs font-normal">Liked</span>
                </button></Link>
                <Link href='/watchlist?type=watchlater'><button className="flex flex-col items-center">
                    <FaClock className="text-xl" />
                    <span className="text-xs font-normal">Watchlist</span>
                </button></Link>
                <Link href='/filter'>
                    <button onClick={resetSearchHandler} className="flex flex-col items-center">
                        <FaSearch className="text-xl" />
                        <span className="text-xs font-normal">Search</span>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default BottomBar;
