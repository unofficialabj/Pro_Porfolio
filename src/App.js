import React from "react";
import Main from "./Pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import ParticleBackground from "./Component/ParticleBackground";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ParticleBackground />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/explore" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
