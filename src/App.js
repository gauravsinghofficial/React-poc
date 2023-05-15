import React from "react";
import Navbar from "./components/Navbar/index.jsx";
import Subnavbar from "./components/Subnavbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Bookticket from "./components/Bookticket/index.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Movie from "./components/Movie/index.jsx";
import Success from "./components/Success/index.jsx";
import DiagnosticCriteria from "./components/DiagnosticCriteria.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <div>
        {location.pathname !== "/diagnostic" && <Navbar />}
        {location.pathname !== "/diagnostic" && <Subnavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookticket" element={<Bookticket />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/bookticket/success" element={<Success />} />
          <Route path="/diagnostic" element={<DiagnosticCriteria />} />
        </Routes>
        {location.pathname !== "/diagnostic" && <Footer />}
      </div>
    </>
  );
}

export default App;
