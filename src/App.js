import React from "react";
import ParticleBackground from "./Component/ParticleBackground";
import Main from "./Pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
