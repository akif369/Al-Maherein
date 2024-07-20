import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import OtherStores from "./pages/OtherStores";
import ContactUs from "./pages/ContactUs";
import Client from "./pages/Client";
import Booknow from "./pages/Booknow";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <main>
      <Home />

      <Service />
      <AboutUs />

      <Client />
      <Booknow />

      <ContactUs />

      <OtherStores />

      <Footer />
    </main>
  );
}

export default App;
