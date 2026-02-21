import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "What We Do", id: "about" },
    { name: "Services", id: "services" },
    { name: "Teams", id: "teams" }, // ✅ Teams
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <button
            onClick={() => handleScroll("home")}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="QubitByte Logo"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="text-gray-700 hover:text-black text-base font-semibold transition relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            {/* CTA */}
            <button className="ml-4 px-6 py-3 rounded-full bg-teal-400 text-black font-bold hover:bg-teal-500 transition shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.id)}
                  className="text-gray-700 font-medium px-2 text-left"
                >
                  {item.name}
                </button>
              ))}

              <button className="mt-4 px-6 py-3 rounded-full bg-teal-400 font-bold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
