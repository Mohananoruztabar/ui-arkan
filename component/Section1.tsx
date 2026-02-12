import React from 'react'
import Container from './Container'

function Section1() {
  return (
    <div className='mt-4 mx-8 bg-white '>
      <div className="bg-[url('/5152785.png')] bg-cover bg-center w-full h-screen flex items-center">
        <Container>
          <div className='text-right'>
            <h2 className='text-3xl lg:text-5xl'>عنوان پیش فرض  <b className='text-btn'>شما</b></h2>
            <p className='text-xl w-[50%] ml-auto text-right lg:text-2xl text-gray-700 my-10 leading-10'>در این قسمت متن و عکس شما قرار میگرد این عکس و متن پیش فرض است و کاملا قابل تغیر است و به راحتی میتوانید این قسمت را شخصی سازی کنید.</p>
            <div className="flex items-end flex-col lg:block space-y-3 lg:space-y-0">
              <button className='w-36 h-10 lg:w-44 lg:h-12 text-sm bg-black lg:text-lg text-white rounded-lg'> متن دکمه شما</button>
              <button className='w-36 h-10 lg:w-44 lg:h-12 text-sm bg-btn lg:text-lg  text-white lg:ml-5 rounded-lg'> متن دکمه شما</button></div>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Section1