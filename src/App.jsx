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
  useEffect(() => {
    
  }, [slideIndex, setSlideIndex]);

  return (
    // <Routes>
    //           <Route path="/" element={<First />}/>
    //           <Route path="/second" element={<Second />}/>
    //           <Route path="/third" element={<Third />}/>
    //           <Route path="/fourth" element={<Fourth />}/>
    //           <Route path="/fifth" element={<Fifth/>}/> 
    //           <Route path="/home" element={<Home />}/>
    //           <Route path="/video" element={<Video />}/> 
    // </Routes>
    <Swiper modules={[EffectFade]} effect="fade"
    slidesPerView={1}
    onSlideChange={(event) => setSlideIndex(event.activeIndex)}
  >
    <SwiperSlide>
    {<First/>}
      </SwiperSlide>

    <SwiperSlide>
      {<Second/>}
      </SwiperSlide>

    <SwiperSlide>
      {<Third/>}
      </SwiperSlide>

    <SwiperSlide>
      {<Fourth/>}
      </SwiperSlide>

    <SwiperSlide>
      {<Fifth/>}
      </SwiperSlide>
    ...
  </Swiper>
  )
}

export default App
