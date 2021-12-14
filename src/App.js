import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "./components/Hero"
import Divider from "./components/Divider"
import Card from "./components/Card"
import Footer from "./components/Footer"




function App() {




  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Divider />
      <Card />
      <Divider />

      <Footer />
    </div>

  );
}

export default App;
