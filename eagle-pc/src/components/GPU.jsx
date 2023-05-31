import React, { useState } from "react";

// GAMES
import redDead from "../data/games/RedDeadRedemption2Logo.jpeg";
import aPlagueTale from "../data/games/APlagueTaleRequiemLogo.jpeg";
import cyberpunk2077 from "../data/games/cyberpunk2077.jpeg";
import doomEternal from "../data/games/DoomEternalLogo.jpeg";

// GPU
import gpuOne from "../data/gpu/rtx2060Super.png";

export default function CpuCards() {
  const [graphics, setGraphics] = useState();

  return (
    <div>
      <div className="modal fade" id="nvidia2060Super" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={gpuOne}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">NVIDIA 2060 Super</p>
                </div>
                <div className="col-lg-8">
                  <div className="listHD">
                    <button
                      type="button"
                      id="btnResolution"
                      onClick={() => setGraphics(0)}
                    >
                      1080p
                    </button>
                    <button
                      type="button"
                      id="btnResolution"
                      onClick={() => setGraphics(1)}
                    >
                      1440p
                    </button>
                    <button
                      type="button"
                      id="btnResolution"
                      onClick={() => setGraphics(2)}
                    >
                      1080p (Ray Tracing)
                    </button>
                    <button
                      type="button"
                      id="btnResolution"
                      onClick={() => setGraphics(3)}
                    >
                      1440p (Ray Tracing)
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <img
                            src={redDead}
                            className="img-fluid"
                            alt="pictGame"
                          />
                        </th>
                        <th scope="col">
                          <img
                            src={aPlagueTale}
                            className="img-fluid"
                            alt="pictGame"
                          />
                        </th>
                        <th scope="col">
                          <img
                            src={cyberpunk2077}
                            className="img-fluid"
                            alt="pictGame"
                          />
                        </th>
                        <th scope="col">
                          <img
                            src={doomEternal}
                            className="img-fluid"
                            alt="pictGame"
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
