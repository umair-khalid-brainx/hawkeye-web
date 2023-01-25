import './InfoPage3.scss';
import '../../shared/Responsive.scss';
import '../../shared/Styles.scss';
function InfoPage3() {
  return (
      <section className="IP3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 left-column">
              <img src="/assets/Bike-Light.png" alt="" className="IP3-image d-block m-auto"/>
            </div>
            <div className="col-lg-6 col-12">
              <div className="logo-text">- Engineered For Riders -</div>
              <h1 className="heading">Compatible With Bicycle, Mountain & Road Bike</h1>
              <div className="text">
                <strong>The Bracket Can Adjust The Size:</strong>
                <p>Which is fit for 20~30mm diameter of the handlebar, 78 inches cable, suitable for most bikes.</p>
                <strong>Tool-Free Installation:</strong>
                <p>Easy installation and More stable than traditional bike mirrors, The support is shockproof, so even through uneven roads screen display will be no shaking and displacement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default InfoPage3
