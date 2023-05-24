import React from "react";
import Nav from './Nav';
import firstLogiciels from '../data/heavenBenchmarkLogo.png'
import secondLogiciels from '../data/msiAfterburnnerLogo.jpeg'
import thirdLogiciels from '../data/quickCpuLogo.jpeg'
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
          <button type="button" id="btnHelp">
            BESOIN D'AIDE
          </button>
        </SwiperSlide>
        <SwiperSlide className="thirdShow">
          <Nav />
          <div className="listLogiciels">
            <a href="https://benchmark.unigine.com/heaven">
              <img
                src={firstLogiciels}
                className="img-fluid w-100"
                alt="heavenBenchmarkLogo"
              />
            </a>
            <a href="https://www.msi.com/Landing/afterburner/graphics-cards">
              <img
                src={secondLogiciels}
                className="img-fluid w-100"
                alt="msiAfterburnnnerLogo"
              />
            </a>
            <a href="https://quickcpu.net">
              <img
                src={thirdLogiciels}
                className="img-fluid w-100"
                alt="quickCpuLogo"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
