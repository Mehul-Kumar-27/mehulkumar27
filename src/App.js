import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "./config/home.json";
import useDataLoading from "./components/loader";

function App() {
  const [data, setData] = useState(null);
  const isLoading = useDataLoading(data);

  useEffect(() => {
    setData(config);
  }, []);

  if (!data) {
    return <Preloader load={true} />;
  }

  return (
    <Router>
      <Preloader load={isLoading} />
      <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<About data={data} />} />
          <Route path="/resume" element={<Resume pdfUrl={data.resume} />} />
        </Routes>
        <Footer socialLinks={data.socialLinks} />
      </div>
    </Router>
  );
}

export default App;
