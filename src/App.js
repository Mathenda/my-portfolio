import './App.css';
import "./style.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from './components/Resume/Resume';
import useLocalStorage from 'use-local-storage';
import React, {useState, useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from  "../src/components/Pre";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
// console.log(newTheme);

}
  return (
    <Router basename="/my-portfolio">
            <Preloader load={load} />
    <div className="App" data-theme={theme}>
        <NavBar switchTheme={switchTheme} CurrentTheme={theme}/>
        <AnimatePresence mode="wait">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About CurrentTheme={theme}/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
        <Footer defer/>
        </AnimatePresence>

    </div>
    </Router>

  );
}

export default App;
