import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
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

  // You can log data changes in a separate useEffect if needed
  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]);

  return (
    <Router>
      <Preloader load={isLoading} />
      <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<About data={data} />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
