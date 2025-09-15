// src/App.jsx
import { Routes, Route } from "react-router-dom";
import CandidateLanding from "./CandidateLanding";
import ProposalDetail from "./ProposalDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<CandidateLanding />} />
        {/* admite id numérico o slug */}
        <Route path="/propuestas/:id" element={<ProposalDetail />} />
        {/* 404 simple */}
        <Route path="*" element={<CandidateLanding />} />
      </Routes>
      <Footer />
    </>
    
  );
}
