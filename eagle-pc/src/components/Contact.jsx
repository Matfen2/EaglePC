import React from 'react'

export default function Contact() {
  return (
    <div className="modal fade" id="youContactMe" tabIndex="-1">
      <div className="modal-dialog modal-xl-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" id="btnCloseContact" data-bs-dismiss="modal">
            <i class="fas fa-times"></i>
          </button>
          <p className="contact">Contactez-nous</p>
          <div className="row">
            <div className="col-lg-8 contactYou">
              <form action="/contact" method="post">
                <div className="row">
                  <div className="col-lg-4">
                    <label for="userName"></label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Nom d'utilisateur"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <label for="email"></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse E-mail"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <select id="sujet" name="sujet">
                      <option value="Hardwares">Hardwares</option>
                      <option value="Logiciels">Logiciels</option>
                      <option value="Optimisations">Optimisations</option>
                    </select>
                  </div>
                  <div className="col-lg-12 message">
                    <label for="message"></label>
                    <textarea
                      name="message"
                      cols={93}
                      rows={5}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
              <button type="submit" id="btnSendContact">
                ENVOYER
              </button>
            </div>
            <div className="col-lg-4 info">
              <ul className="contactInfo">
                <li>
                  <p className="meInfo">
                    <i class="fa-solid fa-phone"></i> 06 41 64 86 97
                  </p>
                </li>
                <li>
                  <p className="meInfo">
                    <i class="fa-solid fa-envelope"></i> eaglePc@outlook.fr
                  </p>
                </li>
                <li>
                  <p className="meInfo">
                    <i class="fa-brands fa-linkedin"></i> eaglePc
                  </p>
                </li>
                <p className="warning">
                  <i class="fa-solid fa-triangle-exclamation"></i> Attention,
                  ces informations ne sont pas vraies
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
