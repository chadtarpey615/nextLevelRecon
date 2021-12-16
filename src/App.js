import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "../src/components/Navbar";


import PriceList from "./pages/PriceList"
import Home from "./pages/Home"



function App() {




  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>

      </Router>

    </div>

  );
}

export default App;
