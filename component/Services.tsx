import React from 'react'
import Container from './Container'

function Services() {
  return (
    <div className='mt-10'>
        <h2 className='text-3xl text-btn text-center'>خدمات آرکان پرداز  <b className='text-gray-700'> در یک نگاه</b></h2>
        <p className='text-gray-800 text-sm text-center mt-10 mx-4 lg:mx-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
        <Container>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5'>
                <article className='shadow1 bg-white rounded-2xl flex flex-col items-center py-2 lg:py-5 mx-2'>
                    <figure className='h-32 flex items-center justify-center'>
                        <img className='w-20 lg:w-36' src="/4028570.png" alt="" />
                    </figure>
                    <h3 className='mt-5 text-gray-700'>آموزش آنلاین</h3>
                    <p className='mt-5 text-gray-600 text-center lg:text-sm px-4 text-[12px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چـاپ، و با استفاده از طراحان گـرافیک است، چـاپگرهـا و متون بلکه روزنـامه و مجله در ستـون و سطرآنچنان کـه لازم اسـت</p>
                    <button className='bg-btn2 flex items-center mt-5 w-36 h-10 lg:w-44 lg:h-12 justify-center gap-4 rounded-xl'>
                        <h4 className='text-sm text-gray-500 font-bold'>مشاهده بیشتر</h4>
                        <img className='w-5 lg:w-10' src="XMLID_15_.png" alt="" />
                    </button>
                </article>
                <article className='shadow1 bg-white rounded-2xl flex flex-col items-center py-2 lg:py-5 mx-2'>
                    <figure className='h-32 flex items-center justify-center'>
                        <img className='w-20 lg:w-36' src="/2910847.png" alt="" />
                    </figure>
                    <h3 className='mt-5 text-btn'>مشاور کسب و کار</h3>
                    <p className='mt-5 text-gray-600 text-center lg:text-sm px-4 text-[12px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چـاپ، و با استفاده از طراحان گـرافیک است، چـاپگرهـا و متون بلکه روزنـامه و مجله در ستـون و سطرآنچنان کـه لازم اسـت</p>
                    <button className='bg-btn flex items-center mt-5 w-36 h-10 lg:w-44 lg:h-12 justify-center gap-4 rounded-xl'>
                        <h4 className='text-sm text-white '>مشاهده بیشتر</h4>
                        <img className='w-5 lg:w-10' src="XMLID_15_.png" alt="" />
                    </button>
                </article>
                <article className='shadow1 bg-white rounded-2xl flex flex-col items-center py-2 lg:py-5 mx-2'>
                    <figure className='h-32 flex items-center justify-center'>
                        <img className='w-20 lg:w-36' src="/2799689.png" alt="" />
                    </figure>
                    <h3 className='mt-5 text-gray-700'>توسعه اپلیکیشن</h3>
                    <p className='mt-5 text-gray-600 text-center lg:text-sm px-4 text-[12px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چـاپ، و با استفاده از طراحان گـرافیک است، چـاپگرهـا و متون بلکه روزنـامه و مجله در ستـون و سطرآنچنان کـه لازم اسـت</p>
                    <button className='bg-btn2 flex items-center mt-5 w-36 h-10 lg:w-44 lg:h-12 justify-center gap-4 rounded-xl'>
                        <h4 className='text-sm text-gray-500 font-bold'>مشاهده بیشتر</h4>
                        <img className='w-5 lg:w-10' src="XMLID_15_.png" alt="" />
                    </button>
                </article>
                <article className='shadow1 bg-white rounded-2xl flex flex-col items-center py-2 lg:py-5 mx-2'>
                    <figure className='h-32 flex items-center justify-center'>
                        <img className='w-20 lg:w-36' src="/3596553.png" alt="" />
                    </figure>
                    <h3 className='mt-5 text-gray-700'>توسعه وب سایت</h3>
                    <p className='mt-5 text-gray-600 text-center lg:text-sm px-4 text-[12px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چـاپ، و با استفاده از طراحان گـرافیک است، چـاپگرهـا و متون بلکه روزنـامه و مجله در ستـون و سطرآنچنان کـه لازم اسـت</p>
                    <button className='bg-btn2 flex items-center mt-5 w-36 h-10 lg:w-44 lg:h-12 justify-center gap-4 rounded-xl'>
                        <h4 className='text-sm text-gray-500 font-bold'>مشاهده بیشتر</h4>
                        <img className='w-5 lg:w-10' src="XMLID_15_.png" alt="" />
                    </button>
                </article>
            </div>
        </Container>
    </div>
  )
}

export default Services