"use client"
import { MainContext } from '@/ContextAPI/MainContext';
import Link from 'next/link';
import { useContext } from 'react';
import { FaSearch, FaHeart, FaFilm, FaUser } from 'react-icons/fa';

const BottomBar = () => {
    const mainContext = useContext(MainContext)

    const resetSearchHandler = () => {
        mainContext?.setSearch('')
        mainContext.setContextPage(1)
        mainContext.setSearchList([])
    }

    return (
        <>
            <div className="fixed bottom-0 w-full bg-[#0A272D] text-white flex justify-around items-center py-2 sm:hidden">
                <Link href='/' onClick={resetSearchHandler} ><button className="flex flex-col items-center">
                    <FaUser className="text-xl" />
                    <span className="text-xs font-normal">Logo</span>
                </button></Link>
                <button className="flex flex-col items-center">
                    <FaHeart className="text-xl" />
                    <span className="text-xs font-normal">Liked</span>
                </button>
                <button className="flex flex-col items-center">
                    <FaFilm className="text-xl" />
                    <span className="text-xs font-normal">Watchlist</span>
                </button>
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
