import './InfoPage5.scss';
function InfoPage5() {
  return (
      <section className="IP5 text-center">
        <img src="/assets/logo.png" alt="" className="logo"/>
        <div className="logo-text">- Be Safe, Be Seen And Record Every Moment -</div>
        <h1 className="heading">The Perfect Balance Of Speed And Resolution</h1>
        <div className="image-background">

          <div className="IP5-image-container">
            <img src="/assets/bike-with-phone-attached.png" alt="" className="IP5-image1"/>
            <div className="image-content">
              <h1 className="smaller-heading text-start">Control Your Bike Camera And <br/> Edit Or Share Your Footage <br/> On The Go...</h1>
              <div className="text-start">
                <button className="btn btn-text fw-bold">Read More</button>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
export default InfoPage5
