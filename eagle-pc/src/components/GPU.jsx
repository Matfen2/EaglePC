import React, { useState } from "react";

// GAMES
import redDead from "../data/games/RedDeadRedemption2Logo.jpeg";
import cyberpunk2077 from "../data/games/cyberpunk2077.jpeg";
import doomEternal from "../data/games/DoomEternalLogo.jpeg";

// GPU
import gpuOne from "../data/gpu/nvidia2080Super.png";
import gpuTwo from "../data/gpu/radeonRX6700XT.png";
import gpuThree from "../data/gpu/rtx3070Eagle.png";
import gpuFour from "../data/gpu/radeonRX6900XT.png";

export default function CpuCards() {
  const [graphics, setGraphics] = useState();

  return (
    <div>
      <div className="modal fade" id="nvidia2080Super" tabIndex="-1">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" id="btnCloseCards" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
              </button>
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={gpuOne}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">NVIDIA 2080 Super</p>
                </div>
                <div className="col-lg-8">
                  <div className="listHD">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(0)}
                        >
                          1080p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(1)}
                        >
                          1440p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(2)}
                        >
                          4K
                        </button>
                      </div>
                    </div>
                  </div>
                  {graphics === 0 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>64°C</td>
                            <td>62°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>241-245W</td>
                            <td>207-215W</td>
                            <td>243-248W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>78 FPS</td>
                            <td>102 FPS</td>
                            <td>200 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 1 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>244-252W</td>
                            <td>233-243W</td>
                            <td>242-250W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>63 FPS</td>
                            <td>65 FPS</td>
                            <td>156 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 2 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>64°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>243-250W</td>
                            <td>240-248W</td>
                            <td>243-252W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>41 FPS</td>
                            <td>35 FPS</td>
                            <td>85 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="cardBuy">
                    <button type="button" id="btnBuy">
                      ACHETER
                    </button>
                    <button type="button" id="btnBenchmark">
                      <a href="https://www.youtube.com/watch?v=Fj-R8l776yM">
                        VOIR LE BENCHMARK
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="radeon6700XT" tabIndex="-1">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" id="btnCloseCards" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
              </button>
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={gpuTwo}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">RADEON 6700 XT</p>
                </div>
                <div className="col-lg-8">
                  <div className="listHD">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(0)}
                        >
                          1080p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(1)}
                        >
                          1440p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(2)}
                        >
                          4K
                        </button>
                      </div>
                    </div>
                  </div>
                  {graphics === 0 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>64°C</td>
                            <td>62°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>241-245W</td>
                            <td>207-215W</td>
                            <td>243-248W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>78 FPS</td>
                            <td>102 FPS</td>
                            <td>200 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 1 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>244-252W</td>
                            <td>233-243W</td>
                            <td>242-250W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>63 FPS</td>
                            <td>65 FPS</td>
                            <td>156 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 2 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>64°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>243-250W</td>
                            <td>240-248W</td>
                            <td>243-252W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>41 FPS</td>
                            <td>35 FPS</td>
                            <td>85 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="cardBuy">
                    <button type="button" id="btnBuy">
                      ACHETER
                    </button>
                    <button type="button" id="btnBenchmark">
                      <a href="https://www.youtube.com/watch?v=Fj-R8l776yM">
                        VOIR LE BENCHMARK
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="nvidia3070Eagle" tabIndex="-1">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" id="btnCloseCards" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
              </button>
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={gpuThree}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">NVIDIA 3070 EAGLE</p>
                </div>
                <div className="col-lg-8">
                  <div className="listHD">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(0)}
                        >
                          1080p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(1)}
                        >
                          1440p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(2)}
                        >
                          4K
                        </button>
                      </div>
                    </div>
                  </div>
                  {graphics === 0 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>64°C</td>
                            <td>62°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>241-245W</td>
                            <td>207-215W</td>
                            <td>243-248W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>78 FPS</td>
                            <td>102 FPS</td>
                            <td>200 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 1 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>244-252W</td>
                            <td>233-243W</td>
                            <td>242-250W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>63 FPS</td>
                            <td>65 FPS</td>
                            <td>156 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 2 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>64°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>243-250W</td>
                            <td>240-248W</td>
                            <td>243-252W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>41 FPS</td>
                            <td>35 FPS</td>
                            <td>85 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="cardBuy">
                    <button type="button" id="btnBuy">
                      ACHETER
                    </button>
                    <button type="button" id="btnBenchmark">
                      <a href="https://www.youtube.com/watch?v=Fj-R8l776yM">
                        VOIR LE BENCHMARK
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="radeon6900XT" tabIndex="-1">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" id="btnCloseCards" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
              </button>
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={gpuFour}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">RADEON 6900 XT</p>
                </div>
                <div className="col-lg-8">
                  <div className="listHD">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(0)}
                        >
                          1080p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(1)}
                        >
                          1440p
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <button
                          type="button"
                          id="btnResolution"
                          onClick={() => setGraphics(2)}
                        >
                          4K
                        </button>
                      </div>
                    </div>
                  </div>
                  {graphics === 0 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>64°C</td>
                            <td>62°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>241-245W</td>
                            <td>207-215W</td>
                            <td>243-248W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>78 FPS</td>
                            <td>102 FPS</td>
                            <td>200 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 1 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>244-252W</td>
                            <td>233-243W</td>
                            <td>242-250W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>63 FPS</td>
                            <td>65 FPS</td>
                            <td>156 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {graphics === 2 && (
                    <div className="table-responsive">
                      <table className="table table-borderless table-transparent">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">
                              <img
                                src={redDead}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={cyberpunk2077}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                            <th scope="col">
                              <img
                                src={doomEternal}
                                className="img-fluid w-100"
                                alt="pictGame"
                              />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Temp.</th>
                            <td>65°C</td>
                            <td>66°C</td>
                            <td>64°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>243-250W</td>
                            <td>240-248W</td>
                            <td>243-252W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>41 FPS</td>
                            <td>35 FPS</td>
                            <td>85 FPS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="cardBuy">
                    <button type="button" id="btnBuy">
                      ACHETER
                    </button>
                    <button type="button" id="btnBenchmark">
                      <a href="https://www.youtube.com/watch?v=Fj-R8l776yM">
                        VOIR LE BENCHMARK
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
