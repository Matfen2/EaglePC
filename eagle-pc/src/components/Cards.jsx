import React, { useState } from "react";
import cpu from "../data/cpuCards";
import gpu from "../data/gpuCards";

export default function Cards() {
  const [showCard, setShowCard] = useState(true);

  const handleTabClick = (tab) => {
    if (tab === "cpu") {
      setShowCard(true);
    } else if (tab === "gpu") {
      setShowCard(false);
    }
  };

  return (
    <div className="types">
      <div className="typesCards">
        <p
          className={showCard ? "active" : ""}
          onClick={() => handleTabClick("cpu")}
        >
          CPU
        </p>
        <p
          className={!showCard ? "active" : ""}
          onClick={() => handleTabClick("gpu")}
        >
          GPU
        </p>
      </div>
      <div className="listCardChoose">
        <div className={`chooseCpu ${showCard ? "" : "hidden"}`}>
          {cpu.map((cpuCards) => (
            <div className="row" key={cpuCards.id}>
              <div className="col-lg-6">
                <div className="card cpu">
                  <div className="card-body">
                    <img
                      src={cpuCards.pict}
                      className="img-fluid w-100"
                      alt="cpuPict"
                    />
                    <p>{cpuCards.title}</p>
                    <div className="listBtnDescribe">
                      <button type="button" id="btnTest">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                      <button type="button" id="btnBuy">
                        <i className="fa-sharp fa-solid fa-basket-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`chooseGpu ${!showCard ? "" : "hidden"}`}>
          {gpu.map((gpuCards) => (
            <div className="row" key={gpuCards.id}>
              <div className="col-lg-6">
                <div className="card cpu">
                  <div className="card-body">
                    <img
                      src={gpuCards.pict}
                      className="img-fluid w-100"
                      alt="cpuPict"
                    />
                    <p>{gpuCards.title}</p>
                    <div className="listBtnDescribe">
                      <button type="button" id="btnTest">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                      <button type="button" id="btnBuy">
                        <i className="fa-sharp fa-solid fa-basket-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
