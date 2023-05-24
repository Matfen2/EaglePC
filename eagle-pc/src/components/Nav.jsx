import React from 'react'
import eaglePcLogo from "../data/EaglePCLogo.png";

export default function Nav() {
  return (
    <div>
      <div className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <a href="/public/index.html">
            <img
              src={eaglePcLogo}
              className="img-fluid w-100"
              alt="eaglePCLogo"
            />
          </a>
        </div>
        <button
          type="button"
          id="btnBars"
          data-bs-toggle="offcanvas"
          data-bs-target="#showCanvas"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div className="offcanvas-top" id="showCanvas" tabindex="-1">
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
          <div className="navbar-nav">
            <li>
              <a href="Benchmark">BENCHMARK</a>
            </li>
            <li>
              <a href="Jeux">JEUX</a>
            </li>
            <li>
              <a href="Drivers">DRIVERS</a>
            </li>
          </div>
        </div>
        <div className="offcanvas-footer">
          <button type="button" id="btnLogIn">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}
