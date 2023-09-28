import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Profil from "./pages/Profil";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

export default AppRoutes;
