import React from 'react'
import Container from './Container'

function Testimonials() {
  return (
    <div className='mt-16 px-4 lg:px-0'>
      <h2 className='text-2xl md:text-3xl text-gray-600 text-center'>
        <b className='text-btn'>نظرات</b> برخی از مشتریان سایت
      </h2>

      <p className='text-gray-800 text-sm md:text-base text-center mt-5 max-w-2xl mx-auto'>
        کاربرانی که از خدمات ما استفاده کردن نظرات خودشان را برای شما بینندگان عزیز گذاشتن
      </p>

      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          
          <div className='lg:col-span-2 bg-btn rounded-xl p-6 md:p-8'>
            <div className='flex items-center justify-between'>
              <figure>
                <img className='w-12 md:w-20 brightness-150 opacity-15' src="/Path 3.png" alt="" />
              </figure>

              <div className='text-right'>
                <h4 className='text-base md:text-lg text-white'>صمد سپهری</h4>
                <figure className='mt-3 md:mt-5'>
                  <img className='w-24 md:w-32' src="/Repeat Grid 70.png" alt="" />
                </figure>
              </div>
            </div>

            <p className='text-white lg:text-sm  text-[12px] text-right mt-5 leading-7 md:leading-8'>
             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            
            <article className='flex items-center justify-between rounded-xl bg-white shadow1 p-4'>
              <div className='text-right flex flex-col gap-2'>
                <h4 className='text-base font-bold'>صمد سپهری</h4>
                <p className='text-sm'>مدیر عامل شرکت سپهر پلاس</p>
              </div>
              <figure>
                <img className='w-16 md:w-20' src="/foto-SORRISO-LINEAR.png" alt="" />
              </figure>
            </article>

            <article className='flex items-center justify-between rounded-xl bg-btn shadow1 p-4'>
              <div className='text-right flex flex-col text-white gap-2'>
                <h4 className='text-base font-bold'>صمد سپهری</h4>
                <p className='text-sm'>مدیر عامل شرکت سپهر پلاس</p>
              </div>
              <figure>
                <img className='w-16 md:w-20' src="/foto-SORRISO-LINEAR.png" alt="" />
              </figure>
            </article>

            <article className='flex items-center justify-between rounded-xl bg-white shadow1 p-4'>
              <div className='text-right flex flex-col gap-2'>
                <h4 className='text-base font-bold'>صمد سپهری</h4>
                <p className='text-sm'>مدیر عامل شرکت سپهر پلاس</p>
              </div>
              <figure>
                <img className='w-16 md:w-20' src="/foto-SORRISO-LINEAR.png" alt="" />
              </figure>
            </article>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Testimonials