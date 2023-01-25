import './Form.scss';
import '../../shared/Responsive.scss';
function InfoPage1() {
  return (
      <section className="Form">
        <div className="row">
          <div className="col-lg-6 col-12 left-column px-0">
            <div className="logo-text">- Get Notified When In Stock -</div>
            <h1 className="heading">Register For Early Access</h1>
            <div className="form-section">
              <input type="text" placeholder="Name" className="form-input text my-3"/><br/>
              <input type="text" placeholder="Email" className="form-input text my-3"/><br/>
              <button className="form-button text my-3">Pre-Order</button><br/>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src="/assets/Form-Image.png" alt="" className="form-image"/>
          </div>
        </div>
      </section>
  );
}
export default InfoPage1
