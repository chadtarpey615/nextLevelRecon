import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "../src/components/Navbar";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"

import PriceList from "./pages/PriceList"
import Home from "./pages/Home"



function App() {




  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>

      </Router>

    </div>

  );
}

export default App;
