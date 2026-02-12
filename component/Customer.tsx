import React from 'react'
import Container from './Container'

function Customer() {
  return (
    <div className='mt-16'>
        <Container>
            <div className='flex justify-between text-right'>
                <h3 className='text-gray-600 text-lg ml-2 lg:ml-0 lg:text-2xl font-bold'> مشاهده همه +</h3>
                <h2 className='text-2xl text-gray-600 font-bold'>برخی از مشتریان ما</h2>
            </div>
            <div className='grid grid-cols-4 lg:grid-cols-8 mt-10 gap-5'>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1 p-4'>
                    <img className='w-22' src="/رستوران-غذای-ایرانی-150x75.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/bazar.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/logo8.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/zhakat.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/logo_faryak.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/1.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/hamyar.png" alt="" />
                </figure>
                <figure className='bg-white rounded-xl flex justify-center items-center shadow1'>
                    <img className='w-22' src="/chakelz.png" alt="" />
                </figure>
            </div>
        </Container>
    </div>
  )
}

export default Customer