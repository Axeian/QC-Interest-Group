import React from "react";

function Landing() {
  return (
    <React.Fragment>
      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p className="mb-5">
                  We're working hard to finish the development of this site. We
                  fancy <strong>Quantum Computing</strong> and hope you do too!
                  Stay tuned!
                </p>
                {/* <div className="input-group input-group-newsletter">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email..."
                    aria-label="Enter email..."
                    aria-describedby="submit-button"
                  ></input>
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      id="submit-button"
                    >
                      Notify Me!
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="social-icons">
        <ul className="list-unstyled text-center mb-0">
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div> */}
    </React.Fragment>
  );
}

export default Landing;
