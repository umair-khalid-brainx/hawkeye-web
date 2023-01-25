import './Footer.scss';
import '../../shared/Responsive.scss';
import '../../shared/Styles.scss';
function InfoPage4() {
  return (
      <section className="Footer">
        <div className="top-footer"></div>
        <div className="main-footer bg-black d-md-block d-none">
          <div className="row">
            <div className="col-5">
              <img src="/assets/skillion-logo.png" alt="" className="my-2 footer-image"/>
              <p className="my-2 footer-text">info@skillon.tech</p>
              <p className="my-2 footer-text muted">116 Research Dr Bethlehem, PA 18015 USA</p>
            </div>
            <div className="col-5">
              <p className="my-2 footer-text">Hawkeye</p>
              <a href="" className="my-2 footer-text muted">FAQ</a>
              <br/>
              <a href="" className="my-2 footer-text muted">How it Works</a>
            </div>
            <div className="col-2">
              <p className="my-2 footer-text">Get The app</p>
              <img src="/assets/app-store.png" alt="" className="my-2 footer-image"/>
              <br/>
              <img src="/assets/play-store.png" alt="" className="my-2 footer-image"/>
            </div>
          </div>
          <hr className="muted"/>
          <div className="row">
            <div className="col-10">
              <div className="my-2 footer-text muted">Copyright ©2023 HAWKeye – The Next Generation Bike Computer . All rights reserved.</div>
            </div>
            <div className="col-2">
              <div className="socials my-2">
                <img src="/assets/fbFooter.png" alt="" className="mx-1 footer-image"/>
                <img src="/assets/linkedinFooter.svg" alt="" className="mx-1 mb-1 footer-image"/>
                <img src="/assets/instagramFooter.png" alt="" className="mx-1 footer-image"/>
              </div>
            </div>
          </div>
        </div>

        <div className="alt-footer text-center bg-black d-md-none d-block">
          <img src="/assets/skillion-logo.png" alt="" className="my-1 w-50 h-auto"/>
          <p className="my-1 footer-text">info@skillon.tech</p>
          <p className="my-1 footer-text muted">116 Research Dr Bethlehem, PA 18015 USA</p>

          <div className="row">
            <div className="col-6">
              <p className="my-1 footer-text">Hawkeye</p>
              <a href="" className="my-1 footer-text muted">FAQ</a>
              <br/>
              <a href="" className="my-1 footer-text muted">How it Works</a>
            </div>
            <div className="col-6">
              <p className="my-1 footer-text">Get The app</p>
              <img src="/assets/app-store.png" alt="" className="my-1 w-50 h-auto"/>
              <br/>
              <img src="/assets/play-store.png" alt="" className="my-1 w-50 h-auto"/>
            </div>
          </div>
          <div className="my-1 footer-text muted">Copyright ©2023 HAWKeye – The Next Generation Bike Computer . All rights reserved.</div>
          <div className="my-1 text-center">
            <img src="/assets/fbFooter.png" alt="" className="mx-1 jj"/>
            <img src="/assets/linkedinFooter.svg" alt="" className="mx-1 mb-1 jj"/>
            <img src="/assets/instagramFooter.png" alt="" className="mx-1 jj"/>
          </div>
        </div>
      </section>
  );
}
export default InfoPage4
