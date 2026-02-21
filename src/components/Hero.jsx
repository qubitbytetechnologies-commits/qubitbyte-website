import { useState, useEffect } from "react";
import QuotePopup from "./QuotePopup";
import heroBg from "../assets/hero1.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasOpened = sessionStorage.getItem("quotePopupOpened");
    if (!hasOpened) {
      setOpen(true);
      sessionStorage.setItem("quotePopupOpened", "true");
    }
  }, []);

  return (
    <section id="home" className="mt-20 sm:-mt-10 bg-white">
      <img
        src={heroBg}
        alt="Hero"
        className="w-full h-auto block"
      />
      <QuotePopup isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
