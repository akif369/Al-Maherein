import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Home />

      <Service />


      <Footer/>
    </main>
  );
}

export default App;
