import './Header.scss';
function Header() {
  return (
      <section className="Header p-2 bg-black text-light text-center">
        <div className="top-header-text d-inline">
          As Seen At Eurobike 2022 With Integrated Vehicle Detection! | <a href="#">Register Now</a> And You’ll Get First Access.
        </div>
        <div className="header-icons">
          <img src="/assets/fbFooter.png" alt="" className="d-inline mx-1"/>
          <img src="/assets/linkedinFooter.svg" alt="" className="d-inline mb-1 mx-1"/>
          <img src="/assets/instagramFooter.png" alt="" className="d-inline mx-1"/>
        </div>
      </section>
  );
}
export default Header
