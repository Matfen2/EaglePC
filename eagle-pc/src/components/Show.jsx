import React from "react";
import eaglePcLogo from "../data/EaglePCLogo.png"
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
          <div>
            <div className="navbar navbar-expand-lg">
              <div className="navbar-brand">
                <a href="/public/index.html">
                  <img
                    src={eaglePcLogo}
                    className="img-fluid w-100"
                    alt="eaglePCLogo"
                  />
                </a>
              </div>
              <div className="navbar-nav">
                <li className="hrefEagle">
                  <a href="./Benchmark.html">Benchmark</a>
                </li>
                <li className="hrefEagle">
                  <a href="./Games.html">Jeux</a>
                </li>
                <li className="hrefEagle">
                  <a href="./Drivers.html">Drivers</a>
                </li>
              </div>
              <button type="button" id="btnLogIn">
                LOG IN
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="secondShow">
        </SwiperSlide>
        <SwiperSlide className="thirdShow">
        </SwiperSlide>
      </Swiper>
    </>
  );
}
