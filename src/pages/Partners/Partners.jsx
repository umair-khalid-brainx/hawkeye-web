import './Partners.scss';
import '../../shared/Responsive.scss';
function Partners() {
  return (
      <section className="partners-page">
        <div className="partners-section text-center">
          <img src="/assets/logo.png" alt="" className="logo"/>
          <div className="logo-text">- Our Partners -</div>
          <div className="flex-container">
            <button className="partner-button"><img src="/assets/partner-smartron.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-handheld.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-bikerent.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-strava.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-sheerventure.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-transatel.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-lehigh.png" alt="" /></button>
            <button className="partner-button"><img src="/assets/partner-benfrank.png" alt="" /></button>
          </div>
        </div>
      </section>
  );
}
export default Partners
