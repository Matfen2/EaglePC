import React from 'react'
import eaglePcLogo from "../data/EaglePCLogo.png";

export default function Offcanvas() {
  return (
    <div>
      <div className="offcanvas offcanvas-top" id="showCanvas" tabIndex="-1">
        <div className="offcanvas-header">
          <a href="/public/index.html">
            <img
              src={eaglePcLogo}
              className="img-fluid w-100"
              alt="eaglePCLogo"
            />
          </a>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="Benchmark">
                BENCHMARK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Jeux">
                JEUX
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Drivers">
                DRIVERS
              </a>
            </li>
          </ul>
        </div>
        <div className="offcanvas-footer">
          <button type="button" id="btnLogIn">
            LOG IN
          </button>
        </div>
        <button type="button" id="btnCloseCanvas" data-bs-dismiss="offcanvas">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}
