import React from "react";
import Nav from './Nav';
import showFirstOne from '../data/ShowFirstPartOne.png'
import showFirstTwo from "../data/ShowFirstPartTwo.png";
import overUnder from '../data/ShowSecond.png'
import firstSoftware from '../data/heavenBenchmarkLogo.png';
import secondSoftware from '../data/msiAfterburnnerLogo.jpeg'
import thirdSoftware from '../data/quickCpuLogo.jpeg'
import fourSoftware from '../data/geforceExperience.png'

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
          <div className="listFree">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                  <img
                    src={showFirstOne}
                    className="img-fluid w-100"
                    id="firstOne"
                    alt="showFirstOne"
                  />
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  src={showFirstTwo}
                  className="img-fluid w-100"
                  id="firstTwo"
                  alt="showFirstTwo"
                />
              </div>
            </div>
            <button type="button" id="btnBuyCard">ACHETER</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="secondShow">
          <Nav />
          <h2 className="team">ETES-VOUS LA TEAM ?</h2>
          <span className="overUnder">
            <img src={overUnder} className="img-fluid w-100" alt="overUnder" />
          </span>
          <p>d'autres conseils pour améliorer votre confort de votre pc</p>
          <button type="button" id="btnAstuces">
            <a href=".help">BESOIN DE CONSEILS</a>
          </button>
        </SwiperSlide>
        <SwiperSlide className="thirdShow">
          <Nav />
          <div className="sentenceDownload" style={{ margin: "30px auto" }}>
            <h2 className="downloadSoftwareOne">
              Télécharger ces logiciels pour tester et comparer vos composants
              avec d'autres :
            </h2>
          </div>
          <div className="listSoftware" style={{ margin: "80px auto" }}>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img
                  src={firstSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img
                  src={secondSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img
                  src={thirdSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img
                  src={fourSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            id="btnOtherSoftware"
            style={{
              padding: "2px",
              width: "240px",
              color: "azure",
              fontFamily: "nulshock",
              display: "block",
              margin: "-90px auto",
              borderRadius: "40px",
              background: "transparent",
            }}
          >
            VOIR LES LOGICILES
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
