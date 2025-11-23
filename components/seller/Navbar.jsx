import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <Link href="/" className="text-3xl md:text-4xl font-semibold text-slate-700 hover:opacity-80 transition">
        <span className="text-[#ea580c]">swift</span>buy<span className="text-[#ea580c] text-4xl md:text-5xl leading-0">.</span>
      </Link>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar