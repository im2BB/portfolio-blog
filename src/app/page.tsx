"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import EmailPopup from "./components/EmailPopup";
import Footer from "./components/Footer";

export default function Home() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailPopup(true);
    setTimeout(() => {
      setShowEmailPopup(false);
    }, 3000);
  };

  const handleCloseEmailPopup = () => {
    setShowEmailPopup(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact onEmailClick={handleEmailClick} />
      <Footer />
      <EmailPopup isOpen={showEmailPopup} onClose={handleCloseEmailPopup} />
    </div>
  );
}
