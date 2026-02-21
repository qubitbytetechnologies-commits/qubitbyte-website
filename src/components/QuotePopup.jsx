import { X, ArrowRight, CheckCircle } from "lucide-react";

export default function QuotePopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const services = [
    { name: "Web Application Development", category: "Development" },
    { name: "Mobile App Development", category: "Development" },
    { name: "E-Commerce Solutions", category: "Development" },
    { name: "Digital Marketing", category: "Marketing" },
    { name: "UI / UX Design", category: "Design" },
    { name: "Logo & Poster Design", category: "Design" },
    { name: "Maintenance & Support", category: "Support" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-scaleIn">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Left */}
          <div className="p-10 bg-[#E6FFFA] border-r border-gray-200">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-emerald-700 rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-8">
              Get Quote
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tell Us What You Need
            </h3>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Select the services you’re interested in. Our team will prepare a
              custom proposal aligned with your goals.
            </p>

            <div className="space-y-4">
              {[
                "Free initial consultation",
                "Clear project roadmap",
                "Flexible pricing models",
                "Dedicated support team",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="p-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Select Services <span className="text-red-500">*</span>
            </h4>

            <div className="grid sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2">
              {services.map((service, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-md transition cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 accent-emerald-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {service.name}
                    </p>
                    <span className="text-xs text-gray-500">
                      {service.category}
                    </span>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <button className="w-full py-4 bg-gray-900 text-white font-semibold text-lg rounded-xl hover:bg-gray-800 transition flex items-center justify-center gap-2">
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
