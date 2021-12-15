import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "../src/components/Navbar";

import Footer from "./components/Footer"
import PriceList from "./pages/PriceList"
import Home from "./pages/Home"



function App() {




  return (
    <div className="App">

      {/* <Card /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>

        <Footer />
      </Router>
    </div>

  );
}

export default App;
