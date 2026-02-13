"use client"
import React , { useState} from 'react'
import Container from './Container'

function Navbar() {

  const [open, setOpen] = useState(false)


  return (
    <div className='w-full h-16 md:h-20 lg:h-24 flex items-center shadow1 relative z-30'>
      <Container>
        
        <div className='flex items-center justify-between'>
          
          <div className='flex items-center gap-4 md:gap-6'>
            <button className="w-12 h-10 lg:w-44 lg:h-12 md:w-36 md:h-10 flex items-center justify-center gap-2 md:gap-4 border-2 rounded-[11px] bg-btn text-white">
              <span className="hidden md:inline text-sm lg:text-lg font-bold"> ورود | عضویت</span>
              <img className='w-4 h-5 md:w-4 md:h-4 lg:w-5 lg:h-7' src="/2657939.png" alt="" />
            </button>
            <figure className='w-5 md:w-6'>
              <img src="/709592.png" alt="" />
            </figure>
          </div>
          
          <div className='flex items-center gap-4 md:gap-6'>
            <nav className='hidden lg:block ml-8 md:ml-12'>
              <ul className='flex gap-6 md:gap-8  flex-row-reverse'>
                <li>صفحه ی اصلی</li>
                <li>خدمات ما</li>
                <li>مرکز آموزش</li>
                <li>نمونه کارها</li>
                <li>اخبار و مقالات</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
              </ul>
            </nav>
            
            <figure>
              <img 
                className='w-32 md:w-36 lg:w-40' 
                src="/Group 23291.png" 
                alt="" 
              />
            </figure>
            
            <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1 p-2">
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden absolute top-16 right-0 w-full bg-white shadow-md p-2">
            <ul className="flex flex-col text-sm text-right">
              <li className='hover:bg-gray-100 py-2 px-1'>صفحه ی اصلی</li>
              <li className='hover:bg-gray-100 py-2 px-1'>خدمات ما</li>
              <li className='hover:bg-gray-100 py-2 px-1'>مرکز آموزش</li>
              <li className='hover:bg-gray-100 py-2 px-1'>نمونه کارها</li>
              <li className='hover:bg-gray-100 py-2 px-1'>اخبار و مقالات</li>
              <li className='hover:bg-gray-100 py-2 px-1'>درباره ما</li>
              <li className='hover:bg-gray-100 py-2 px-1'>تماس با ما</li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Navbar