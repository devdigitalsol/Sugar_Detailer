import './App.css'
import Home from './components/Home'
import React, { useState, useEffect, useRef } from 'react';
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
import { useSwipeable } from 'react-swipeable';
import BACKGROUND_AUDIO from "./assets/images/Video.mp4"


function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  }, [isPlaying]);

  const handlers = useSwipeable({
    onSwiped: () => {
      if (!isPlaying) {
        setIsPlaying(true); 
      }
    },
  });
   
 
  return (

    <div {...handlers}>
      <audio ref={audioRef} src={BACKGROUND_AUDIO} loop />


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
  </div>
  )
}

export default App
