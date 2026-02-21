const AboutUs = () => {
  return (
    <section className="relative bg-white pt-16 pb-24 md:pt-20 md:pb-32 px-1 lg:px-1 overflow-hidden"  id="about">

      {/* Tech Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMCAyNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHpNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-[#E6FFFA] text-emerald-700 rounded-full text-lg font-bold mb-12 uppercase tracking-[0.2em] shadow-sm">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
            </span>
            What We Do
          </div>

          <h1 className="text-lg md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block">Digital Transformation</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Engineered for Impact
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We architect, develop, and scale enterprise-grade digital platforms that
            drive measurable business outcomes and competitive advantage.
          </p>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            <div className="border-l-4 border-gray-900 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Technology Partnership
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-bold text-gray-900">QubitByte</span> delivers
                comprehensive digital solutions by blending technical excellence
                with business strategy. We partner with organizations to transform
                ideas into scalable, high-performance digital products.
              </p>
              <div className="inline-flex items-center text-emerald-600 font-medium">
                <span>Explore Our Methodology</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-14">
            Our Process
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Your Idea, Our Starting Point",
                desc: "Every great product starts with your idea. We listen closely, understand your vision, and align with your business goals before anything else."
              },
              {
                step: "02",
                title: "Turning Ideas into a Plan",
                desc: "We convert your idea into a clear roadmap — defining features, structure, and execution to keep the project smooth and focused."
              },
              {
                step: "03",
                title: "Design That Speaks",
                desc: "Our designers craft clean, user-friendly interfaces that are visually engaging and easy to use, creating meaningful user experiences."
              },
              {
                step: "04",
                title: "Code That Works",
                desc: "We develop fast, secure, and scalable solutions using modern technologies that perform seamlessly across all devices."
              },
              {
                step: "05",
                title: "Make It Better",
                desc: "Before launch, we test, refine, and optimize every detail to ensure reliability, performance, and a smooth user experience."
              },
              {
                step: "06",
                title: "Go Live & Go Further",
                desc: "We launch your product with confidence and continue to support, improve, and scale it as your business grows."
              }
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-6 -left-6 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors z-0">
                  {phase.step}
                </div>
                <div className="relative z-10 p-8 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 text-left">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-6">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {phase.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-gray-100 text-center">
          <p className="text-gray-700 text-lg mb-8">
            Ready to architect your digital transformation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300">
              Schedule Technical Consultation
            </button>
            <button className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:border-gray-900 transition-all duration-300">
              Download Capabilities Deck
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
