import './App.css';
import NavbarComp from './components/NavbarComp'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './components/Contact';
import Index from './components/Index';
import Review from './components/Review';
import Step from './components/Step';
import Goal from './components/Goal';
import Infort from './components/Infort';
import Ways from './components/Ways';
import AccordionComponent from './components/FAQ'
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile'
import Gracias from './components/Gracias';
import TermsConditions from './components/TermsConditions'
import AboutUs from './components/About';
import PrivacyPolicy from './components/Politics';
import './i18n'; // Importa la configuración de idiomas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App bg-navbar">
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<>
            <Index/>
            <AboutUs/>
            <Review/>
            <Infort/>
            <Contacto/>
            <Goal/>
            <Step/>
            <AccordionComponent/>
            <Ways/>
          </>} />
          <Route path="#home" element={<Index />} />
          <Route path="#Review" element={<Review />} />
          <Route path="#contact" element={<Contacto />} />
          <Route path='/gracias' element={<Gracias/>}/>
          <Route path='/terms' element={<TermsConditions/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
      </Routes>
      <Footer/>
      <FooterMobile/>
    </div>
    </Router>
  );
}

export default App;

