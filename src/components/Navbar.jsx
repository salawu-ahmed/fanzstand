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
            <ul className='w-full flex gap-8 justify-center items-center py-2 bg-black'>
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
