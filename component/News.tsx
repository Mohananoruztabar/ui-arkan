import React from 'react'
import Container from './Container'
import { FaStar } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";

function News() {
  return(
    <div className='mt-16'>
        <Container>
            <div className='flex flex-col lg:flex-row-reverse justify-between items-end lg:items-center text-right gap-3 px-2 lg:px-0'>
                <h2 className='text-xl sm:text-2xl text-gray-600 font-bold'>آخرین اخبار و مطالب سایت</h2>
                <h3 className='text-gray-600 text-sm sm:text-lg font-bold cursor-pointer'> مشاهده همه +</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5 px-2 lg:px-0 mt-10'>
                <div className='bg-white shadow1 rounded-xl p-2'>
                    <figure >
                        <img src="/photo-1589361580298-73eaccc5fd96.png" alt="" />
                    </figure>
                    <h4 className='text-right text-sm font-bold text-gray-700 mt-3'>لورم ایپسوم متن ساختگی تیم طراحی سپهر پلاس برای قسمت عنوان وبلاگ</h4>
                    <span className='block border-dashed border border-gray-400 w-full mt-3'></span>
                    <p className='text-gray-500 text-[12px] lg:text-sm text-right mt-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است برای زیبا سازی مطالب</p>
                    <div className='flex justify-between mt-3'>
                        <ul className='flex items-center flex-row-reverse'>
                            <li className='text-gray-500 ml-2 text-lg lg:text-xl'><PiClockFill /></li>
                            <li className='text-gray-500 text-sm'>یک دقیقه </li>
                        </ul>
                        <div className='flex justify-end-safe items-center'>
                            <h2 className='text-gray-600 text-sm'>صمد سپهری</h2>
                            <figure className='-mr-3'>
                                <img src="/images.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow1 rounded-xl p-2'>
                    <figure>
                        <img src="/photo-1548611716-3000815a5803.png" alt="" />
                    </figure>
                    <h4 className='text-right text-sm font-bold text-gray-700 mt-3'>لورم ایپسوم متن ساختگی تیم طراحی سپهر پلاس برای قسمت عنوان وبلاگ</h4>
                    <span className='block border-dashed border border-gray-400 w-full mt-3'></span>
                    <p className='text-gray-500 text-[12px] lg:text-sm text-right mt-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است برای زیبا سازی مطالب</p>
                    <div className='flex justify-between mt-3'>
                        <ul className='flex items-center flex-row-reverse'>
                            <li className='text-gray-500 ml-2 text-lg lg:text-xl'><PiClockFill /></li>
                            <li className='text-gray-500 text-sm'>یک دقیقه </li>
                        </ul>
                        <div className='flex justify-end-safe items-center'>
                            <h2 className='text-gray-600 text-sm'>صمد سپهری</h2>
                            <figure className='-mr-3'>
                                <img src="/images.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow1 rounded-xl p-2'>
                     <figure>
                        <img src="/photo-1590650516494-0c8e4a4dd67e.png" alt="" />
                    </figure>
                    <h4 className='text-right text-sm font-bold text-gray-700 mt-3'>لورم ایپسوم متن ساختگی تیم طراحی سپهر پلاس برای قسمت عنوان وبلاگ</h4>
                    <span className='block border-dashed border border-gray-400 w-full mt-3'></span>
                    <p className='text-gray-500 text-right text-[12px] lg:text-sm mt-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است برای زیبا سازی مطالب</p>
                    <div className='flex justify-between mt-3'>
                        <ul className='flex items-center flex-row-reverse'>
                            <li className='text-gray-500 ml-2 text-lg lg:text-xl'><PiClockFill /></li>
                            <li className='text-gray-500 text-sm'>یک دقیقه </li>
                        </ul>
                        <div className='flex justify-end-safe items-center'>
                            <h2 className=' text-gray-600 text-sm'>صمد سپهری</h2>
                            <figure className='-mr-3'>
                                <img src="/images.png" alt="" />
                            </figure>
                        </div>
                    </div> 
                </div>
            </div>
        </Container>
    </div>
  )
}

export default News