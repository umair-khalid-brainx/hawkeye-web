import './InfoPage4.scss';
import '../../shared/Responsive.scss';
import '../../shared/Styles.scss';
function InfoPage4() {
  return (
      <div className="IP4-wrapper">
        <section className="IP4">
          <div className="text-center">
            <img src="/assets/logo.png" alt="" className="logo"/>
            <div className="logo-text">- Control & Share #Safetech -</div>
            <h1 className="heading">Get Real-Time Alerts Of <br/> Approaching Vehicles</h1>
          </div>
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="text">
                <strong>Maximum Safety And Peace Of Mind:</strong><br/>
                Bike mirror's monitor is updated in real-time helps you see vehicles and other bikes approaching from the rear and frees you
                from constantly looking over your shoulder to see what’s behind you. This makes for a more enjoyable, carefree experience.
                <br/><br/>
                Bike mirror fit for bike trailer for toddlers, easily observe baby's move, and pet trailer. Make your ride with your
                children more interesting.
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <img src="/assets/Phone-App.png" alt="" className="IP4-image d-block m-auto"/>
            </div>
          </div>
        </section>
        <div className="IP4-footer"></div>
      </div>
  );
}
export default InfoPage4
