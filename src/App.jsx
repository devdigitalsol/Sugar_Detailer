import './App.css'
import Home from './components/Home'
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Video from './components/Video'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


function App() {
  const [slideIndex, setSlideIndex] = useState(0);
 

  return (
    <Swiper
       modules={[EffectFade]} 
       effect="fade"
       slidesPerView={1}
       onSlideChange={(event) => setSlideIndex(event.activeIndex)}
    >
    <SwiperSlide>
        <First isActive={slideIndex === 0} />
    </SwiperSlide>

    <SwiperSlide>
        <Second isActive={slideIndex === 1} />
    </SwiperSlide>

    <SwiperSlide>
        <Third isActive={slideIndex === 2} />
    </SwiperSlide>

    <SwiperSlide>
        <Fourth isActive={slideIndex === 3} />
    </SwiperSlide>

    <SwiperSlide>
        <Fifth isActive={slideIndex === 4} />
    </SwiperSlide>
  </Swiper>
  )
}

export default App
