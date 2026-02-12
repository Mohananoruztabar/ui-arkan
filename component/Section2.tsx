import React from 'react'
import Container from './Container'

function Section2() {
  return (
    <div className='mt-10 bg-btn2'>
      <Container>
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='col-span-1 lg:col-span-2 text-right pt-15'>
            <h3 className='text-2xl text-gray-700'>ما <b className='text-btn'>که هستیم</b> و اهداف ما چیست؟</h3>
            <p className='text-gray-700 text-sm lg:text-xl mt-5 leading-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد </p>
            <button className='w-36 h-10 lg:w-44 lg:h-12 text-sm bg-black lg:text-lg text-white ml-5 rounded-lg mt-10 lg:ml-0'>متن دکمه شما</button>
          </div>
          <figure className="relative col-span-1 h-[300px] lg:mt-15">
            <img src="/Group 23358.png" alt="" className="absolute top-1/2 -translate-y-1/2 left-0 brightness-0 opacity-50 w-[350px] ml-16 lg:ml-0 lg:w-full"/>
            <img src="/11111111111111111.png" alt="" className="absolute top-1/2 -translate-y-1/2 left-30 lg:left-10 w-[200px] lg:w-[250px] "/>
          </figure>
        </section>
      </Container>
    </div>
  )
}

export default Section2