import { useState } from "react";
import "./App.css";
import Navbar from "./layouts/Nav";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router";

function App() { 

  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </>
  );
}

export default App;
