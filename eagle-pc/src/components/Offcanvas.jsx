import React from 'react'

export default function Offcanvas() {
  return (
    <div>
      <div className="offcanvas offcanvas-rigth" id="showCanvas" tabIndex="-1">
        <div className="offcanvas-body">
          <div className="listCanvas">
            <li>
              <a href="Jeux">LOGICIELS</a>
            </li>
            <li>
              <a href="Logiciels">HARDWARES</a>
            </li>
            <li>
              <a href="Optimisation">OPTIMISATION</a>
            </li>
          </div>
        </div>
        <div className="offcanvas-footer">
          <button
            type="button"
            id="btnLogIn"
            data-bs-toggle="modal"
            data-bs-target="#logIn"
          >
            LOG IN
          </button>
          <p className='and'>/</p>
          <button
            type="button"
            id="btnSignUp"
            data-bs-toggle="modal"
            data-bs-target="#signUp"
          >SIGN UP</button>
        </div>
        <button type="button" id="btnCloseCanvas" data-bs-dismiss="offcanvas">
          <i class="fas fa-times"></i>
        </button>
      </div>

      {/* LOG IN */}
      <div className="modal fade" id="logIn" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p className="connect">Connectez-vous</p>
              <form action="/logIn" method="POST">
                <label for="pseudo"></label>
                <input
                  type="text"
                  name="pseudo"
                  placeholder="Nom d/utilisateur"
                  required
                ></input>

                <label for="password"></label>
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de Passe"
                  required
                ></input>
                <button type="submit" id="logInConnect">
                  SE CONNECTER
                </button>
              </form>
              <button type="button" id="btnCloseLogIn" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SIGN UP */}
      <div className="modal fade" id="signUp" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" id="btnCloseSignUp" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
              </button>
              <p className="inscribe">Inscription</p>
              <form action="/signUp" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <label for="firstName"></label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Prénom"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <label for="lastName"></label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Pseudo"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <label for="phone"></label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Num. de téléphone"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <label for="email"></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse email"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <div className="check">
                      <input
                        type="checkbox"
                        name="hardware"
                        value="hardware"
                      ></input>
                      <label for="hardware">HARDWARE</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        name="logiciels"
                        value="logiciels"
                      ></input>
                      <label for="logiciels">LOGICIELS</label>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        name="optimisation"
                        value="optimisation"
                      ></input>
                      <label for="optimisation">OPTIMISATION</label>
                    </div>
                  </div>
                </div>
                <button type="submit" id="logInConnect">
                  SE CONNECTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
