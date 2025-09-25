"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/screens/Home";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}