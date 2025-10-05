import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import IntroSection from './component/Introsection'
import AboutSection from "./component/Aboutsection";
import Skillsection from "./component/Skillsection";
import Projectsection from './component/Projectsection';
import Footer from "./component/Footer";
import Contactsection from "./component/Contactsection";




function App() {
 
  
  return (
    <div className="App">
  
    <Navbar />
    <IntroSection />
    <AboutSection />
    <Skillsection />
    <Projectsection />
    <Contactsection />
     <Footer />

    </div>
  );
}

export default App;
