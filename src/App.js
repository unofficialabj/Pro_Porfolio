import React, { useEffect, useState } from "react";
import ParticleBackground from "./Component/ParticleBackground";
import Main from "./Pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personal from "./Pages/Personal";
import Professional from "./Pages/Professional";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1800);
    console.log("asnih");
  }, []);
  console.log(loading);
  return (
    <>
      <ParticleBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main loading={loading} />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
