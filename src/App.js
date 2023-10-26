
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar';
import LandPage from './components/landPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SendEmail from './components/SendEmail';
import Footer from './components/Footer';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar />
      </Router>
      <LandPage />
      <Skills />
      <Projects />
      <Contact />
      <SendEmail />
      <Footer />

    </div>
  );
}

export default App;
