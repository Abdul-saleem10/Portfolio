import React from 'react'

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import './testimonials.css'

const data = [
    {
        id:1,
        avatar:AVTR1,
        name:'Sam',
        review:'Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own great fill creepeth in moving sixth every it evening gathering let light moving cattle.'
    },
    {
        id:2,
        avatar:AVTR2,
        name:'Sam',
        review:'Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own great fill creepeth in moving sixth every it evening gathering let light moving cattle.'
    },
    {
        id:3,
        avatar:AVTR3,
        name:'Sam',
        review:'Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own great fill creepeth in moving sixth every it evening gathering let light moving cattle.'
    },
    {
        id:4,
        avatar:AVTR4,
        name:'Sam',
        review:'Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own great fill creepeth in moving sixth every it evening gathering let light moving cattle.'
    }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from client</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {data.map((e,i)=>{
                return <SwiperSlide className="testimonial">
                    <div key={i} className='cilent_avatar'>
                        <img src={e.avatar} alt='Avatar'/>
                    </div>
                    <h5 className='client_name'>{e.name}</h5>
                        <small className='client_review'>
                        {e.review}
                        </small>
                </SwiperSlide>
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials