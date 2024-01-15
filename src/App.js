import logo from './logo.svg';
import './App.css';
import "./style.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from './components/Resume/Resume';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
    </div>
    </Router>

  );
}

export default App;
