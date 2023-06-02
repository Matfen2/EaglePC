import React, { useState } from "react";

// GAMES
import redDead from "../data/games/RedDeadRedemption2Logo.jpeg";
import cyberpunk2077 from "../data/games/cyberpunk2077.jpeg";
import doomEternal from "../data/games/DoomEternalLogo.jpeg";

// GPU
import cpuOne from "../data/cpu/intelCorei512400F.JPEG";
import cpuTwo from "../data/cpu/amdRyzen5600X.jpeg";
import cpuThree from "../data/cpu/intelCorei513600K.jpeg";
import cpuFour from "../data/cpu/amdRyzen7700.jpeg";

export default function CpuCards() {
  const [graphics, setGraphics] = useState();

  return (
    <div>
      <div className="modal fade" id="intelI512400F" tabIndex="-1">
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
                    src={cpuOne}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">INTEL CORE I5 12400F</p>
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
      <div className="modal fade" id="amdRyzen5600X" tabIndex="-1">
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
                    src={cpuTwo}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">AMD RYZEN 5600X</p>
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
      <div className="modal fade" id="intelI513600K" tabIndex="-1">
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
                    src={cpuThree}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">INTEL CORE I5 13600K</p>
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
      <div className="modal fade" id="amdRyzen7700" tabIndex="-1">
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
                    src={cpuFour}
                    className="img-fluid w-100"
                    alt="pictCard"
                  />
                  <p className="nameCards">AMD RYZEN 7700</p>
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
