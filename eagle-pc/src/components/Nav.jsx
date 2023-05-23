import React from 'react'
import eaglePcLogo from "../data/EaglePCLogo.png";

export default function Nav() {
  return (
    <div>
      <div className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <a href='/public/index.html'><img
            src={eaglePcLogo}
            className="img-fluid w-100"
            alt="eaglePCLogo"
          /></a>
        </div>
        <div className="navbar-nav">
          <li className='hrefEagle'>
            <a href="./Benchmark.html">Benchmark</a>
          </li>
          <li className='hrefEagle'>
            <a href="./Games.html">Jeux</a>
          </li>
          <li className='hrefEagle'>
            <a href="./Drivers.html">Drivers</a>
          </li>
        </div>
        <button type="button" id="btnLogIn">
          LOG IN
        </button>
      </div>
    </div>
  );
}
