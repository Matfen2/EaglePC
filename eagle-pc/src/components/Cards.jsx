import React, { useState } from 'react'
import cpuOne from '../data/cpu/intelCorei512400F.JPEG'
import cpuTwo from '../data/cpu/amdRyzen5600X.jpeg'
import cpuThree from '../data/cpu/intelCorei513600K.jpeg'
import cpuFour from '../data/cpu/amdRyzen7700.jpeg'
import gpuOne from '../data/gpu/rtx2060Super.png'
import gpuTwo from '../data/gpu/radeonRX6700XT.png'
import gpuThree from '../data/gpu/rtx3070Eagle.png'
import gpuFour from '../data/gpu/radeonRX6900XT.png'

export default function Cards() {
  const [cards, setCards] = useState();
  return (
    <div className="cardBackground">
      <div className="typesCards">
        <div className="row">
          <button type="button" id="btnCards" onClick={() => setCards(0)}>
            CPU
          </button>
          <button type="button" id="btnCards" onClick={() => setCards(1)}>
            GPU
          </button>
        </div>
      </div>
      <div className="listCard">
        {cards === 0 && (
          <div className="row">
            <div className="col-lg-3 cpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#intelI512400F">
                <div className="card-body">
                  <img src={cpuOne} className="img-fluid w-100" alt="pictCPU" />
                  <p className="titleCard">INTEL CORE I5 12400F</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#amdRyzen5600X">
                <div className="card-body">
                  <img src={cpuTwo} className="img-fluid w-100" alt="pictCPU" />
                  <p className="titleCard">AMD RYZEN 5600X</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#intelI513600K">
                <div className="card-body">
                  <img
                    src={cpuThree}
                    className="img-fluid w-100"
                    alt="pictCPU"
                  />
                  <p className="titleCard">INTEL CORE I5 13600K</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#amdRyzen7700">
                <div className="card-body">
                  <img
                    src={cpuFour}
                    className="img-fluid w-100"
                    alt="pictCPU"
                  />
                  <p className="titleCard">AMD RYZEN 7700</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {cards === 1 && (
          <div className="row">
            <div className="col-lg-3 gpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#nvidia2060Super">
                <div className="card-body">
                  <img src={gpuOne} className="img-fluid w-100" alt="pictCPU" />
                  <p className="titleCard">NVIDIA RTX 2060 SUPER</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#radeon6700XT">
                <div className="card-body">
                  <img src={gpuTwo} className="img-fluid w-100" alt="pictCPU" />
                  <p className="titleCard">RADEON RX 6700XT</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#nvidia3070Eagle">
                <div className="card-body">
                  <img
                    src={gpuThree}
                    className="img-fluid w-100"
                    alt="pictCPU"
                  />
                  <p className="titleCard">NVIDIA RTX 3070 EAGLE</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gpu">
              <div className="card" data-bs-toggle="modal" data-bs-target="#radeon6900XT">
                <div className="card-body">
                  <img
                    src={gpuFour}
                    className="img-fluid w-100"
                    alt="pictCPU"
                  />
                  <p className="titleCard">RADEON RX 6900XT</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        <button
          type="button"
          id="btnContact"
          data-bs-toggle="modal"
          data-bs-target="#youContactMe"
        >
          CONTACT
        </button>
        <p className='copyright'>© Eagle PC</p>
        <div className="listSocial">
          <li className='socialItem'>
            <a href="facebook" className='socialLink'>
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className='socialItem'>
            <a href="facebook" className='socialLink'>
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className='socialItem'>
            <a href="facebook" className='socialLink'>
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
