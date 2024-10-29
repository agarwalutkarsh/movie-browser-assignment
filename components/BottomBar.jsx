import { FaSearch, FaHeart, FaFilm, FaUser } from 'react-icons/fa';

const BottomBar = () => (
    <>
        <div className="fixed bottom-0 w-full bg-[#0A272D] text-white flex justify-around items-center py-2 sm:hidden">
            <button className="flex flex-col items-center">
                <FaUser className="text-xl" />
                <span className="text-xs font-normal">Logo</span>
            </button>
            <button className="flex flex-col items-center">
                <FaHeart className="text-xl" />
                <span className="text-xs font-normal">Liked</span>
            </button>
            <button className="flex flex-col items-center">
                <FaFilm className="text-xl" />
                <span className="text-xs font-normal">Watchlist</span>
            </button>
            <button className="flex flex-col items-center">
                <FaSearch className="text-xl" />
                <span className="text-xs font-normal">Search</span>
            </button>
        </div>
    </>
);

export default BottomBar;
