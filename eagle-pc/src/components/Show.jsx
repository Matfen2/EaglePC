import React from "react";
import Nav from './Nav';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="firstShow">
          <Nav />
        </SwiperSlide>
        <SwiperSlide className="secondShow">
          <Nav />
        </SwiperSlide>
        <SwiperSlide className="thirdShow">
          <Nav />
          <h2 className="downloadLogiciels">
            Télécharger ces logiciels pour tester et comparer vos composants
            avec d'autres :
          </h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
