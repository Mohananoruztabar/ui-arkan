import React from 'react'
import Container from './Container'

function Customer() {
  return (
    <div className='mt-16'>
      <Container>

        <div className='flex flex-col lg:flex-row-reverse justify-between items-end lg:items-center text-right gap-3 px-2 lg:px-0'>
          <h2 className='text-xl sm:text-2xl text-gray-600 font-bold'> برخی از مشتریان ما</h2>
          <h3 className='text-gray-600 text-sm sm:text-lg font-bold cursor-pointer'> مشاهده همه +</h3>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 mt-10 gap-5'>
          
          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/رستوران-غذای-ایرانی-150x75.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/bazar.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/logo8.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/zhakat.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/logo_faryak.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/1.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/hamyar.png" alt="" />
          </figure>

          <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
            <img className='w-20 sm:w-24 object-contain' src="/chakelz.png" alt="" />
          </figure>

        </div>

      </Container>
    </div>
  )
}

export default Customer