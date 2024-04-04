import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='w-full flex py-2 justify-between bg-black items-center'>
                <div className="logo w-20 h-20 rounded-full">
                    <img src="/fanzstand.logo.jpg" alt="" className='rounded-full' />
                </div>
                <div className='flex gap-4'>
                    <span>
                        <FaSearch fill='yellow' size={30} />
                    </span>
                    <span>
                        <FiUser fill='yellow' size={30} />
                    </span>
                </div>
            </div>
            <ul className='sm:w-full flex gap-8 justify-start lg:justify-center items-center pt-2 pb-3 px-4 w-4/5 scroll-smooth mx-auto bg-black overflow-x-scroll'>
                <li className='px-6 py-1 rounded-full bg-gray-500 text-yellow-500'><Link to={"#"}>Home</Link></li>
                <li className='px-6 py-1 rounded-full bg-gray-500 text-yellow-500'><Link to={"#"}>Fixtures</Link></li>
                <li className='px-6 py-1 rounded-full bg-gray-500 text-yellow-500'><Link to={"#"}>Results</Link></li>
                <li className='px-6 py-1 rounded-full bg-gray-500 text-yellow-500'><Link to={"#"}>Articles</Link></li>
                <li className='px-6 py-1 rounded-full bg-gray-500 text-yellow-500'><Link to={"#"}>Videos</Link></li>
                <li className='px-6 py-1 rounded-full bg-gray-500 text-yellow-500'><Link to={"#"}>News</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
