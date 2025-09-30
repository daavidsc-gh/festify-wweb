"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/screens/Home";
import PageNotFound from "@/screens/PageNotFound";
import Artists from "@/screens/Artists";
import ArtistDetail from "@/screens/ArtistDetail";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
      </Routes>
    </HashRouter>
  );
}