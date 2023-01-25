import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Header, Video, InfoPage1, InfoPage2, InfoPage3, InfoPage4, InfoPage5, Nav, Form, FAQ, Partners, Footer } from './shared/Components';

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <InfoPage1 />
      <InfoPage2 />
      <InfoPage3 />
      <InfoPage4 />
      <InfoPage5 />
      <Nav />
      <Form />
      <FAQ />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
