import React from 'react'


export default function Offers() {
  return (
    <div className="Offers">
      <div className="container">
        <h2 className="bestOffers">Meilleurs Offres du moment :</h2>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="typeOffer">
                  <h3>La plus abordable du gaming :</h3>
                </div>
                <div className="bundle">
                  <p className="nameGPU">NVIDIA RTX 2060</p>
                  <p className="plus">+</p>
                  <p className="nameCPU">INTEL CORE I5 11400F</p>
                </div>
                <div className="listBtn">
                  <button type="button" id="btnBenchmark">
                    Benchmark<i class="fa-solid fa-gauge-max"></i>
                  </button>
                  <button type="button" id="btnPrice">
                    519€
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="typeOffer">
                  <h3>Meilleur rapport qualité/prix :</h3>
                </div>
                <div className="bundle">
                  <p className="nameGPU">NVIDIA RTX 3070</p>
                  <p className="plus">+</p>
                  <p className="nameCPU">AMD RYZEN 7 5800X</p>
                </div>
                <div className="listBtn">
                  <button type="button" id="btnBenchmark">
                    Benchmark<i class="fa-solid fa-gauge-max"></i>
                  </button>
                  <button type="button" id="btnPrice">
                    817€
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="typeOffer">
                  <h3>La plus onéreuse du gaming :</h3>
                </div>
                <div className="bundle">
                  <p className="nameGPU">NVIDIA RTX 4080</p>
                  <p className="plus">+</p>
                  <p className="nameCPU">INTEL CORE I9 12900K</p>
                </div>
                <div className="listBtn">
                  <button type="button" id="btnBenchmark">
                    Benchmark<i class="fa-solid fa-gauge-max"></i>
                  </button>
                  <button type="button" id="btnPrice">
                    1432€
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
