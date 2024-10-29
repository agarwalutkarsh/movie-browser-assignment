import { FaHeart, FaFilter, FaClock } from 'react-icons/fa';

const NavBar = () => (
  <div className="hidden sm:flex fixed top-0 w-full bg-[#0A272D] text-white py-3 px-6 justify-between items-center">
    {/* Logo / Title */}
    <div className="text-lg font-bold">Movie Browser</div>

    {/* Search Bar */}
    <div className="flex items-center bg-[#0A2A2F] px-3 py-2 rounded-lg w-full max-w-md border-2 border-white">
      <input 
        type="text"
        placeholder="Search movies..."
        className="bg-transparent outline-none w-full text-white placeholder-gray-400"
      />
    </div>

    {/* Icons */}
    <div className="flex gap-5 items-center ml-4">
      <button className="flex items-center gap-1 hover:text-gray-300" title="Filter">
        <FaFilter className="text-xl" />
      </button>
      <button className="flex items-center gap-1 hover:text-gray-300" title="Liked">
        <FaHeart className="text-xl" />
      </button>
      <button className="flex items-center gap-1 hover:text-gray-300" title="Watch Later">
        <FaClock className="text-xl" />
      </button>
    </div>
  </div>
);

export default NavBar;
