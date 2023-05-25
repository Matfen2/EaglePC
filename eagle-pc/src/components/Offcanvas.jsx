import React from 'react'

export default function Offcanvas() {
  return (
    <div>
      <div className="offcanvas offcanvas-rigth" id="showCanvas" tabIndex="-1">
        <div className="offcanvas-body">
          <div className="listCanvas">
            <li>
              <a href="Benchmark">BENCHMARK</a>
            </li>
            <li>
              <a href="Jeux">JEUX</a>
            </li>
            <li>
              <a href="Drivers">Drivers</a>
            </li>
          </div>
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
