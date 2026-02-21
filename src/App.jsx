import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

import { Phone, Mail, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ================= HOME CONTENT ================= */
function LandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Teams />
      <Contact />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          <a
            href="tel:+1234567890"
            className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg"
          >
            <Phone className="w-5 h-5" />
          </a>

          <a
            href="mailto:contact@qubitbyte.com"
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="relative w-14 h-14 flex items-center justify-center"
        >
          <svg className="absolute inset-0 -rotate-90" width="56" height="56">
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#7c3aed"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white">
            <ArrowUp className="w-5 h-5" />
          </div>
        </button>
      </div>
    </main>
  );
}

/* ================= ROUTES ================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
