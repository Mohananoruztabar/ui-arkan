import React from 'react'
import Container from './Container'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-16 bg-white shadow2'>
      <Container>
        <div className='text-right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-10 px-4'>

          <div className='lg:col-span-2'>
            <div className='flex flex-row-reverse items-center gap-1'>
              <span className='bg-br1 w-7 h-2 block rounded-xl'></span>
              <span className='bg-br2 w-4 h-2 block rounded-xl'></span>
              <h3 className='mr-2 text-sm text-gray-700'>عضویت در خبرنامه</h3>
            </div>

            <p className='mt-5 text-sm sm:text-base'>
              با عضویت در خبرنامه از آخرین اخبار و مطالب سایت مطلع شوید
            </p>

            <div className='flex flex-col sm:flex-row-reverse gap-3 mt-4'>
              <button className='w-full sm:w-28 h-10 bg-btn text-lg text-white rounded-3xl'>
                عضویت
              </button>

              <input
                className='rounded-2xl w-full sm:w-64 h-10 bg-btn2 text-right p-2'
                type="text"
                placeholder='آدرس ایمیل'
              />
            </div>

            <ul className='flex justify-center sm:justify-end gap-6 mt-6'>
              <li className='text-icons'><FaTelegramPlane size={24}/></li>
              <li className='text-icons'><FaInstagram size={24}/></li>
              <li className='text-btn'><FaFacebookSquare size={24}/></li>
              <li className='text-icons'><FaTwitter size={24}/></li>
            </ul>
          </div>
          <div>
            <div className='flex flex-row-reverse items-center gap-1'>
              <span className='bg-br1 w-7 h-2 block rounded-xl'></span>
              <span className='bg-br2 w-4 h-2 block rounded-xl'></span>
              <h3 className='mr-2 text-sm text-gray-70'>پشتیبانی و تماس</h3>
            </div>

            <ul className='flex flex-col items-end gap-4 mt-5 text-sm'>
              <li className='flex items-center'>درباره سایت ما<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
              <li className='flex items-center'>تماس باما<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
              <li className='flex items-center'>سوالات متداول<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
              <li className='flex items-center'>ورود و ثبت نام<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
            </ul>
          </div>

          <div>
            <div className='flex flex-row-reverse items-center gap-1'>
              <span className='bg-br1 w-7 h-2 block rounded-xl'></span>
              <span className='bg-br2 w-4 h-2 block rounded-xl'></span>
              <h3 className='mr-2 text-sm text-gray-70'>دسترسی راحت</h3>
            </div>

            <ul className='flex flex-col items-end gap-4 mt-5 text-sm'>
              <li className='flex items-center'>اخبار و مقالات<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
              <li className='flex items-center'>آموزش ها<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
              <li className='flex items-center'>خدمات ما<span className='w-2 h-2 block ml-2 rounded-full bg-br1'></span></li>
              <li className='flex items-center'>نمونه کارها<span className='w-2 h-2 ml-2 block rounded-full bg-br1'></span></li>
            </ul>
          </div>
          <div>
            <div className='flex flex-row-reverse items-center gap-1'>
              <span className='bg-br1 w-7 h-2 block rounded-xl'></span>
              <span className='bg-br2 w-4 h-2 block rounded-xl'></span>
              <h3 className='mr-2 text-sm text-gray-70'>مجوزهای سایت</h3>
            </div>

            <div className='flex flex-row-reverse mt-5 gap-2 justify-center sm:justify-start'>
              <figure className='rounded-xl bg-btn2 p-4 flex justify-center items-center'>
                <img className='w-20' src="/samandehi.png" alt="" />
              </figure>
              <figure className='rounded-xl bg-btn2 p-4 flex justify-center items-center'>
                <img className='w-20' src="/logo.aspx.png" alt="" />
              </figure>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Footer