import { Facebook, X, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    Company: ["About Us", "What We Do", "Careers", "Blog"],
    Services: [
      "Web Development",
      "App Development",
      "Digital Marketing",
      "UI / UX Design",
    ],
    Resources: ["Case Studies", "FAQs", "Support"],
    Legal: ["Privacy Policy", "Terms of Service"],
  };

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: X, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900">
                QubitByte
              </span>
              <span className="ml-3 text-xs px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                Enterprise
              </span>
            </div>

            <p className="text-gray-600 max-w-md leading-relaxed">
              We design and build scalable digital solutions that help
              businesses grow, innovate, and compete in the modern
              digital landscape.
            </p>

            <div className="flex gap-4 mt-8">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-emerald-50 flex items-center justify-center text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} QubitByte. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-700 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-700 text-sm transition-colors"
            >
              Terms of Service
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}