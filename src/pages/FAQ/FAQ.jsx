import './FAQ.scss';
import '../../shared/Responsive.scss';
function FAQ() {
  return (
      <section className="faq-page text-center">
        <img src="/assets/logo.png" alt="" className="logo"/>
        <div className="logo-text">
          - Frequently Asked Questions -
        </div>
        <h1 className="heading">
          You Got Questions? We Got Your Answers!
        </h1>
       <div>
         <button className="btn btn-left mx-2 mt-2 btn-text">Ask Your Question</button>
         <button className="btn btn-right mx-2 mt-2 btn-text">Help Center</button>
       </div>


        <div className="accordion" id="accordionExample">
          <div className="accordion-item ps-3">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Camera Hook Up To Monitor Using Mini Usb ?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body text-start accordion-text">
                Placeholder Text
              </div>
            </div>
          </div>

          <div className="accordion-item ps-3">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Is There A Way To Record The Video From The Camera?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body text-start accordion-text">
                Placeholder Text
              </div>
            </div>
          </div>

          <div className="accordion-item ps-3">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I Do Not Have Room On My Seat Post Am I Able To Connect Us To The Bike Rack On The Back Of The Bike ?
              </button>
            </h2>

            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body text-start accordion-text">
                Placeholder Text
              </div>
            </div>
          </div>

          <div className="accordion-item ps-3">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                How Do Get This Display Off Blue Screen To Get Images
              </button>
            </h2>

            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body text-start accordion-text">
                Placeholder Text
              </div>
            </div>
          </div>

          <div className="accordion-item ps-3 accordion-item-last">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed accordion-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Clip Broke From Camera How Do I Get Replacement ?
              </button>
            </h2>

            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body text-start accordion-text">
                Placeholder Text
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default FAQ
