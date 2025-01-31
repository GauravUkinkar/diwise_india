import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Fourzero from "./pages/fouro/Fourzero";
import Privacy from "./pages/privacy/Privacy";
import Termscondition from "./pages/terms/Termscondition";

function App() {
  return (
    <div className="App">
      {/* Wrap the entire app with BrowserRouter */}
<<<<<<< Updated upstream
      {/* Wrap the entire app with BrowserRouter */}
      <BrowserRouter>
        <PageAnalytics />
        <PageAnalytics />
=======
      <BrowserRouter>
        <PageAnalytics />
>>>>>>> Stashed changes
        <Scroll />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/businessLaunchpad" element={<Business />} />
          <Route path="/digitalMarketing" element={<Digital />} />
          <Route path="/brandingAndDesign" element={<Branding />} />
          <Route path="/publicRelations" element={<Public />} />
          <Route path="/websiteDevelopment" element={<Website />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog_detail/:id" element={<Blog_details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<Privacy/>} />
          <Route path ="/termsandconditions" element={<Termscondition/>} />
          <Route  path="*" element={<Fourzero/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Component to handle Google Analytics page tracking
function PageAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page view with Google Analytics on route change
    if (window.gtag) {
      window.gtag("config", "G-CYF2JE0E4H", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // This runs every time the route changes

  return null; // This component doesn't render anything
}

export default App;
