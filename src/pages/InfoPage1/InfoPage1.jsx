import './InfoPage1.scss';
import '../../shared/Responsive.scss';
import '../../shared/Styles.scss';
function InfoPage1() {
  return (
      <section className="IP1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 left-column">
              <div className="logo-text">- Be Aware Of What's Behind You -</div>
              <h1 className="heading">AI Vision To Predict<br/>The Future</h1>
              <div className="text">
                Powerful ML algorithms use camera vision to predict cars movements in real-time. Designed to meet the demands of professional road cycling, our bike cameras are built tough to take the kind of punishment that hours in the saddle can dish out and have a battery that lasts as long as you do.
              </div>
            </div>
            <div className="col-lg-6 col-12 px-0">
              <img src="/assets/Bike-Seat.png" alt="" className="IP1-image"/>
            </div>
          </div>
        </div>
      </section>
  );
}
export default InfoPage1
