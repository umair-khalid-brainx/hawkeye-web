import './Nav.scss';
import '../../shared/Responsive.scss';
import '../../shared/Styles.scss';
function Nav() {
  return (
      <section className="Nav">
        <div className="top-section text-center">
          <img src="/assets/logo.png" alt="" className="logo"/>
          <div className="logo-text">- How It Works -</div>
          <h1 className="heading">The Most Advanced Hawkeye Yet !</h1>
        </div>

        <div className="tab-container">
          <div className="row">
            <div className="col-lg-5 col-12 d-flex align-items-center">
              <div className="tab-content">
                <div className="tab-pane active" id="image1">
                  <img src="/assets/nav-image1.png" alt="" className="nav-image"/>
                </div>

                <div className="tab-pane" id="image2">
                  <img src="/assets/nav-image2.png" alt="" className="nav-image"/>
                </div>

                <div className="tab-pane" id="image3">
                  <img src="/assets/nav-image3.png" alt="" className="nav-image"/>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <ul className="nav nav-tabs">

                <li className="nav-item my-3">
                  <a className="nav-link active" data-bs-toggle="tab" href="#image1">
                    <strong className="text fw-bolder">- Visual + Audio Alerts:</strong>
                    <p className="text">
                      You’ll receive visual + audio alerts through your phone of cars headed your way seconds before you notice them. That way you can react faster and prevent accidents.
                    </p>
                  </a>
                </li>

                <li className="nav-item my-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#image2">
                    <strong className="text fw-bolder">- Automatically Save Snaps Of Near-Miss Incidents:</strong>
                    <p className="text">
                      The HAWKeye bike app automatically identifies cars blocking bike lanes or near-miss incidents along your ride and captures a snap for later use.
                    </p>
                  </a>
                </li>

                <li className="nav-item my-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#image3">
                    <strong className="text fw-bolder">- Review Each Incident That Happened Along Your Ride:</strong>
                    <p className="text">
                      Look back at each near-miss incident along your route and decide which clips to save for later use.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Nav
