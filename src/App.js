import {  useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 

function App() {

  useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (ms)
          easing: "ease-in-out", // Animation easing
          once: true, // Whether the animation should happen only once
        });
      }, []);

  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/test" element={<Test/>} /> */}
        </Routes>
      <Footer/>  
      </BrowserRouter>

    </div>
  );
}

export default App;
