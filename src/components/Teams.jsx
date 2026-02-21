import React, { useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import Moula from "../assets/images/moula1.png";
import Aswin from "../assets/images/aswin2.png";
import Jothi from "../assets/images/jothi4.png";
import Vishnu from "../assets/images/vishnu3.png";
import Selva from "../assets/images/selva5.jpeg";

function Teams() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal-item")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: "Gnanajothi K", role: "Chief Executive Officer", desc: "Leading the company vision with a focus on sustainable growth and industry-wide innovation.", image: Jothi },
    { name: "Vishnu Prasath A", role: "Chief Technology Officer", desc: "Architecting scalable digital solutions and spearheading our modern tech stack development.", image: Vishnu },
    { name: "Moula Hussain N", role: "Chief Operating Officer", desc: "Mastering operational workflows to ensure peak efficiency and flawless project delivery.", image: Moula },
    { name: "Ashwin SV", role: "Chief Marketing Officer", desc: "Crafting brand narratives that resonate with global audiences and drive market presence.", image: Aswin },
    { name: "Selvam T", role: "Chief Business Dev. Officer", desc: "Forging strategic alliances and identifying new market frontiers for organizational expansion.", image: Selva },
  ];

  return (
    <section id="teams" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

        {/* Header */}
        <div className="mb-20 text-center reveal-item opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Our <span className="text-teal-600">Leadership</span>
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Zig-Zag Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 relative
                  ${isEven ? "md:mt-20" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* ARROW CONNECTOR */}
                <div
                  className={`hidden md:flex absolute top-1/2 ${
                    isEven ? "-left-12 flex-row-reverse" : "-right-12"
                  } items-center`}
                >
                  <div className="w-10 h-[2px] bg-teal-600"></div>
                  <div
                    className={`w-0 h-0 border-y-4 border-y-transparent ${
                      isEven
                        ? "border-l-8 border-l-teal-600"
                        : "border-r-8 border-r-teal-600"
                    }`}
                  ></div>
                </div>

                {/* CARD */}
                <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-teal-100/50 transition-all duration-500">
                  <div
                    className={`flex flex-col gap-6 ${
                      isEven
                        ? "md:flex-row-reverse text-right"
                        : "md:flex-row text-left"
                    }`}
                  >
                    {/* Image */}
                    <div className="shrink-0 flex justify-center">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -inset-2 border border-teal-600/20 rounded-full"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mt-1 mb-3">
                        {member.role}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {member.desc}
                      </p>

                      {/* Socials */}
                      <div
                        className={`flex gap-4 mt-6 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {[FaLinkedin, FaInstagram, FaWhatsapp].map((Icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className="text-slate-400 hover:text-teal-600 transition-transform hover:-translate-y-1"
                          >
                            <Icon size={18} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Background Index */}
                  <span className="absolute bottom-4 right-6 text-slate-50 text-6xl font-black select-none z-[-1]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Teams;
