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
            <div className="card">
              <div className="card-body">
                <p>NVIDIA 2080 SUPER</p>
                <p>+</p>
                <p>INTEL CORE I5 13600F</p>
                <p>654€</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <p>NVIDIA 2080 SUPER</p>
                <p>+</p>
                <p>INTEL CORE I5 13600F</p>
                <p>654€</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <p>NVIDIA 2080 SUPER</p>
                <p>+</p>
                <p>INTEL CORE I5 13600F</p>
                <p>654€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
