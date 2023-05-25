import React from "react";
import Nav from './Nav';
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
        </SwiperSlide>
        <SwiperSlide className="secondShow">
          <Nav />
        </SwiperSlide>
        <SwiperSlide className="thirdShow">
          <Nav />
          <div className="sentenceDownload" style={{margin: '30px auto'}}>
            <h2
              className="downloadSoftwareOne"
              style={{
                color: "azure",
                fontFamily: "nulshock",
                textAlign: "center",
              }}
            >
              Télécharger ces logiciels pour tester et
            </h2>
            <h2
              className="downloadSoftwareTwo"
              style={{
                color: "azure",
                fontFamily: "nulshock",
                textAlign: "center",
              }}
            >
              comparer vos composants avec d'autres :
            </h2>
          </div>
          <div className="listSoftware" style={{ margin: "80px auto" }}>
            <div
              className="row"
              style={{
                textAlign: "center",
                justifyContent: "center",
                columnGap: "200px",
              }}
            >
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                style={{ width: "150px" }}
              >
                <img
                  src={firstSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                  style={{
                    height: "200px",
                    maxWidth: "220px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                style={{ width: "150px" }}
              >
                <img
                  src={secondSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                  style={{
                    height: "200px",
                    maxWidth: "220px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                style={{ width: "150px" }}
              >
                <img
                  src={thirdSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                  style={{
                    height: "200px",
                    maxWidth: "220px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                style={{ width: "150px" }}
              >
                <img
                  src={fourSoftware}
                  className="img-fluid w-100"
                  alt="heavenBenchmarkLogo"
                  style={{
                    height: "200px",
                    maxWidth: "220px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <h3
            style={{
              color: "azure",
              fontFamily: "nulshock",
              textAlign: "center",
              margin: "100px auto",
            }}
          >
            et bien d'autres
          </h3>
          <button
            type="button"
            id="btnOtherSoftware"
            style={{
              padding: "2px",
              width: "240px",
              color: "azure",
              fontFamily: "nulshock",
              display: "block",
              margin: "-60px auto",
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
