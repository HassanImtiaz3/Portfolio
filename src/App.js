import Navigation from "./components/Navigation";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
