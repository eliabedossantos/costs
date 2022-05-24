//General
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";

// layout 
import NavTop from './components/layout/NavTop';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App"> 
        <BrowserRouter>
          <NavTop />
            
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/my-projects" element={<Projects />} />
            </Routes>

      
          <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;
