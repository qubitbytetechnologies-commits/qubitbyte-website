import {
  Code,
  Smartphone,
  Megaphone,
  PenTool,
  FileText,
  Palette,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "High-performance, scalable websites and web applications built using modern technologies.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications designed for performance and usability.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that increase visibility, engagement, and conversions.",
    },
    {
      icon: PenTool,
      title: "UI / UX Design",
      description:
        "User-centered interface design focused on usability, aesthetics, and conversion.",
    },
    {
      icon: FileText,
      title: "Content Writing",
      description:
        "SEO-optimized content crafted to communicate clearly and build brand authority.",
    },
    {
      icon: Palette,
      title: "Logo & Poster Creation",
      description:
        "Visual identity design that strengthens brand recognition and consistency.",
    },
  ];

  return (
    <section id="services" className="bg-white pt-2 pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-[#E6FFFA] text-emerald-700 rounded-full text-lg font-bold mb-12 uppercase tracking-[0.2em] shadow-sm">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
            </span>
            Our Services
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions Built for Modern Businesses
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver digital services designed to help businesses grow, scale,
            and compete effectively in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Contact Actions */}
              <div className="flex items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
