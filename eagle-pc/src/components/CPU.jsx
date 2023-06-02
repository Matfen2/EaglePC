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
                            <td>35°C</td>
                            <td>44°C</td>
                            <td>40°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>36W</td>
                            <td>41-47W</td>
                            <td>37W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>92 FPS</td>
                            <td>71 FPS</td>
                            <td>262 FPS</td>
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
                            <td>38°C</td>
                            <td>44°C</td>
                            <td>40°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>30-32W</td>
                            <td>38-42W</td>
                            <td>34W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>74 FPS</td>
                            <td>56 FPS</td>
                            <td>197 FPS</td>
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
                            <td>38°C</td>
                            <td>43°C</td>
                            <td>39°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>28W</td>
                            <td>31W</td>
                            <td>30W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>48 FPS</td>
                            <td>34 FPS</td>
                            <td>177 FPS</td>
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
                      <a href="https://www.youtube.com/watch?v=ZyPjdIPwfHI&t=553s">
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
                  <p className="nameCards">AMD RYZEN 5 5600X</p>
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
                            <td>60°C</td>
                            <td>60°C</td>
                            <td>70°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>83W</td>
                            <td>88W</td>
                            <td>80W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>192 FPS</td>
                            <td>89 FPS</td>
                            <td>324 FPS</td>
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
                            <td>59°C</td>
                            <td>59°C</td>
                            <td>67°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>79W</td>
                            <td>83W</td>
                            <td>77W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>151 FPS</td>
                            <td>61 FPS</td>
                            <td>272 FPS</td>
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
                            <td>58°C</td>
                            <td>59°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>75W</td>
                            <td>79W</td>
                            <td>75W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>103 FPS</td>
                            <td>39 FPS</td>
                            <td>166 FPS</td>
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
                      <a href="https://www.youtube.com/watch?v=M_a_oEO7LQs&t=1067s">
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
                            <td>58°C</td>
                            <td>67°C</td>
                            <td>68°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>92W</td>
                            <td>134W</td>
                            <td>100W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>171 FPS</td>
                            <td>126 FPS</td>
                            <td>188 FPS</td>
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
                            <td>58°C</td>
                            <td>67°C</td>
                            <td>67°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>88W</td>
                            <td>131W</td>
                            <td>97W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>139 FPS</td>
                            <td>103 FPS</td>
                            <td>137 FPS</td>
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
                            <td>57°C</td>
                            <td>65°C</td>
                            <td>66°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>84W</td>
                            <td>127W</td>
                            <td>95W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>101 FPS</td>
                            <td>85 FPS</td>
                            <td>126 FPS</td>
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
                      <a href="https://www.youtube.com/watch?v=7-MFKndQrDo">
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
      <div className="modal fade" id="amd7Ryzen7700X" tabIndex="-1">
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
                            <td>65°C</td>
                            <td>68°C</td>
                            <td>69°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>83W</td>
                            <td>114W</td>
                            <td>97W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>212 FPS</td>
                            <td>140 FPS</td>
                            <td>201 FPS</td>
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
                            <td>64°C</td>
                            <td>68°C</td>
                            <td>69°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>81W</td>
                            <td>111W</td>
                            <td>95W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>186 FPS</td>
                            <td>119 FPS</td>
                            <td>176 FPS</td>
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
                            <td>64°C</td>
                            <td>67°C</td>
                            <td>67°C</td>
                          </tr>
                          <tr>
                            <th scope="row">Watt</th>
                            <td>78W</td>
                            <td>107W</td>
                            <td>91W</td>
                          </tr>
                          <tr>
                            <th scope="row">FPS</th>
                            <td>161 FPS</td>
                            <td>96 FPS</td>
                            <td>143 FPS</td>
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
                      <a href="https://www.youtube.com/watch?v=x4mylrPL9rA">
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
