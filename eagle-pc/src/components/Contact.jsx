import React from 'react'

export default function Contact() {
  return (
    <div className="modal fade" id="youContactMe" tabIndex="-1">
      <div className="modal-dialog modal-xl-dialog modal-dialog-centered">
        <div className="modal-content">
          <p>Contactez-nous</p>
          <div className="row">
            <div className="col-lg-8">
              <form action="/contact" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <label for="userName"></label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Pseudo"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <label for="userName"></label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Pseudo"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <label for="userName"></label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Pseudo"
                      required
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <label for="userName"></label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Pseudo"
                      required
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
