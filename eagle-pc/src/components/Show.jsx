import React from "react";
import Nav from './Nav';
import showFirstOne from '../data/ShowFirstPartOne.png'
import showFirstTwo from "../data/ShowFirstPartTwo.png";
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
          <div className="row firstPict" style={{ marginTop: "-150px" }}>
            <div className="col-lg-6">
              <img
                src={showFirstOne}
                alt="pictShowFirst"
                className="img-fluid w-100 one"
                style={{
                  marginTop: "-10%",
                  marginLeft: "15%",
                  height: "600px",
                  maxWidth: "600px"
                }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={showFirstTwo}
                alt="pictShowFirst"
                className="img-fluid w-100"
                id="two"
                style={{
                  marginTop: "-150px",
                  marginLeft: "160px",
                  height: "600px",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="secondShow">
          <Nav />
        </SwiperSlide>
        <SwiperSlide className="thirdShow">
          <Nav />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
