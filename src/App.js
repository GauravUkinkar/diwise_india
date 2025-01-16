import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// Pages
import About from "./pages/about/About";
import Home from "./pages/home/Home";

import Blog_details from "./pages/blogdetails/Blog_details";
import Business from "./pages/businessLaunchpad/Business";
import Contact from "./pages/contact/Contact";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";

// AOS (Animate on Scroll)
import AOS from "aos";
import "aos/dist/aos.css";
import Digital from "./pages/digitalMarketing/Digital";
import Branding from "./pages/branding/Branding";
import Public from "./pages/public/Public";
import Website from "./pages/website/Website";
import Blog from "./pages/blog/Blog";


function App() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: "ease-in-out", // Animation easing
      once: true, // Whether the animation should happen only once
    });
  }, []);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

  return (
    <div className="App">
      <BrowserRouter>
        <Scroll />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/businessLaunchpad" element={<Business />}onClick={scrollToTop} />
          <Route path="/digitalMarketing" element={<Digital />}onClick={scrollToTop} />
          <Route path="/brandingAndDesign" element={<Branding />}onClick={scrollToTop} />
          <Route path="/publicRelations" element={<Public />} onClick={scrollToTop} />
          <Route path="/websiteDevelopment" element={<Website onClick={scrollToTop} /> }  />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog_detail/:id" element={<Blog_details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
