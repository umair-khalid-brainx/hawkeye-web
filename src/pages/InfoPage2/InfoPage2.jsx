import './InfoPage2.scss';
import '../../shared/Responsive.scss';
import '../../shared/Styles.scss';
function InfoPage2() {
  return (
      <section className="IP2 text-center">
        <img src="/assets/logo.png" alt="" className="logo"/>
        <div className="logo-text">- Rear View Camera With 4.3'' HD Night Vision Function -</div>
        <h1 className="heading">Wide-Angle New Upgrade</h1>
        <div className="text text-mid">
          The viewing angle of the camera is 145 degrees, the screen shows the scene is the actual distance, there will be no deformation. 4.3 inches screen which is Bigger than a traditional bicycle mirror.
        </div>
        <div>
          <img src="/assets/Bike-cameras-recording-cars.png" alt="" className="IP2-image"/>
        </div>
      </section>
  );
}
export default InfoPage2
