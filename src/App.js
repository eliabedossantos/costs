import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

// Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

// layout
import Container from "./components/layout/Container";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div>
              <Link to="/">Home</Link>
              <Link to="/company">Company</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/new-project">New Project</Link>
            </div>
            <Routes>
              <Container>
                <Route path="/*" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/new-project" element={<NewProject />} />
              </Container>
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
