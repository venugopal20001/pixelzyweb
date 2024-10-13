
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
