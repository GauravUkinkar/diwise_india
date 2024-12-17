import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
