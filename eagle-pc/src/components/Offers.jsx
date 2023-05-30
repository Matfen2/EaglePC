import React from 'react'

export default function Offers() {
  function showOffer () {
    const offers = document.getElementById('btnOffers');
    const showOffers = document.querySelector('.listOffers');

    offers.style.display = "none";
    showOffers.classList.add("show");
  }

  return (
    <div className="Offers">
      <button type="button" id="btnOffers" onClick={showOffer}>
        MEILLEURS OFFRES DU MOMENTS
      </button>
      <div className="listOffers">
        <div className="row">
          <div className="col-lg-4">
            <div className="card" style={{marginLeft: '60px', marginRight: '60px'}}>
              <div className="card-body">
                <p>NVIDIA 2080 SUPER</p>
                <p className='plus'>&</p>
                <p>INTEL CORE I5 13600F</p>
                <p className='price'>654€</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{marginLeft: '60px', marginRight: '60px'}}>
              <div className="card-body">
                <p>RTX 3070 GIGABYTE</p>
                <p>&</p>
                <p>INTEL CORE I7 13600K</p>
                <p className='price'>824€</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{marginLeft: '60px', marginRight: '60px'}}>
              <div className="card-body">
                <p>RADEON RX 6750XT</p>
                <p>&</p>
                <p>AMD RYZEN 9 5950X</p>
                <p className='price'>1104€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
