import React from 'react'
import Container from './Container'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Education() {
  return (
    <div className='mt-16'>
        <Container>
            <div className='flex flex-col lg:flex-row-reverse justify-between items-end lg:items-center text-right gap-3 px-2 lg:px-0'>
                <h2 className='text-xl sm:text-2xl text-gray-600 font-bold'>جدید ترین آموزش های ما</h2>
                <h3 className='text-gray-600 text-sm sm:text-lg font-bold cursor-pointer'> مشاهده همه +</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5 px-2 lg:px-0 mt-10'>
                <div className='bg-white shadow1 rounded-xl p-2 mt-2'>
                    <figure>
                        <img src="/Communication-skills-400x251.png" alt="" />
                    </figure>
                    <h4 className='text-right text-sm lg:text-xl text-gray-600 mt-4'>اسم آموزش پیش فرض شما</h4>
                    <div className='flex justify-between items-center'>
                        <ul className='flex'>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg2 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg2 text-sm lg:text-2xl'><FaStar /></li>
                        </ul>
                        <div className='flex lg:justify-end-safe items-center mt-2'>
                            <h2 className='text-sm text-[12px] text-gray-600'>صمد سپهری</h2>
                            <figure className='-mr-4'>
                                <img className='lg:w-20 w-14' src="/foto-SORRISO-LINEAR.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <span className='block border-dashed border border-gray-400 w-full'></span>
                    <div className='text-right flex justify-between mt-5 items-center gap-2'>
                        <button className='w-36 h-10 lg:w-44 lg:h-12 text-[12px] lg:text-sm bg-btn2 text-gray-600 rounded-lg font-bold'>ثبت نام در دوره</button>
                        <h5 className='flex flex-row-reverse text-money font-bold text-[12px] lg:text-sm'><span className='ml-2 text-[12px] lg:text-sm text-money font-light'>67,000</span>تومان</h5>
                    </div>
                </div>
                <div className='bg-white shadow1 rounded-xl p-2 mt-2'>
                    <figure>
                        <img src="/marketing-and-sales-in-business-400x251.png" alt="" />
                    </figure>
                    <h4 className='text-right text-sm lg:text-xl text-gray-600 mt-4'>اسم آموزش پیش فرض شما</h4>
                    <div className='flex justify-between items-center'>
                        <ul className='flex'>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg2 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg2 text-sm lg:text-2xl'><FaStar /></li>
                        </ul>
                        <div className='flex lg:justify-end-safe items-center mt-2'>
                            <h2 className='text-sm text-[12px] text-gray-600'>صمد سپهری</h2>
                            <figure className='-mr-4'>
                                <img className='lg:w-20 w-14' src="/foto-SORRISO-LINEAR.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <span className='block border-dashed border border-gray-400 w-full'></span>
                    <div className='text-right flex justify-between mt-5 items-center gap-2'>
                        <button className='w-28 md:w-36 h-10 lg:w-44 lg:h-12 text-[12px] lg:text-sm bg-btn2 text-gray-600 rounded-lg font-bold'>ثبت نام در دوره</button>
                        <h5 className='flex flex-row-reverse text-money font-bold text-[12px] lg:text-sm'>رایگان</h5>
                    </div>
                </div>
                <div className='bg-white shadow1 rounded-xl p-2 mt-2'>
                    <figure>
                        <img src="/Methods-of-increasing-productivity-400x251.png" alt="" />
                    </figure>
                    <h4 className='text-right text-sm lg:text-xl text-gray-600 mt-4'>اسم آموزش پیش فرض شما</h4>
                    <div className='flex justify-between items-center'>
                        <ul className='flex'>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg1 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg2 text-sm lg:text-2xl'><FaStar /></li>
                            <li className='text-starbg2 text-sm lg:text-2xl'><FaStar /></li>
                        </ul>
                        <div className='flex lg:justify-end-safe items-center mt-2'>
                            <h2 className='text-sm text-[12px] text-gray-600'>صمد سپهری</h2>
                            <figure className='-mr-4'>
                                <img className='lg:w-20 w-14' src="/foto-SORRISO-LINEAR.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <span className='block border-dashed border border-gray-400 w-full'></span>
                    <div className='text-right flex justify-between mt-5 items-center gap-2'>
                        <button className='w-36 h-10 lg:w-44 lg:h-12 text-[12px] lg:text-sm bg-btn2 text-gray-600 rounded-lg font-bold'>ثبت نام در دوره</button>
                        <h5 className='flex flex-row-reverse text-[12px] lg:text-sm text-money font-bold'><span className='ml-2 text-[12px] lg:text-sm text-money font-light'>67,000</span>تومان</h5>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Education