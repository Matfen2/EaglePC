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
        <button type="button" id="btnBars">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
}
