import { Send } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_85x9a1d",
        "template_02nkdkn",
        formRef.current,
        "524An9EGGK7sMhg9p"
      )
      .then(() => {
        return emailjs.sendForm(
          "service_85x9a1d",
          "template_6g8y4y7",
          formRef.current,
          "524An9EGGK7sMhg9p"
        );
      })
      .then(() => {
        formRef.current.reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        console.error("Email send failed:", error);
      });
  };

  return (
    <section id="contact" className="bg-white pt-20 pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Reach Us
          </h2>
        </div>

        {/* Form Card */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

          {/* Badge */}
          <span className="absolute -top-4 left-6 bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-md">
            Need a Service
          </span>

          {/* FORM */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

            {/* Name / Phone / Email */}
            <div className="grid md:grid-cols-3 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="border-b border-gray-300 py-3 focus:outline-none focus:border-emerald-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                required
                className="border-b border-gray-300 py-3 focus:outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border-b border-gray-300 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Services */}
            <div>
              <p className="text-gray-700 font-medium mb-4">
                Select services you are interested in
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border border-gray-200 rounded-xl p-4">
                {[
                  "Web Development",
                  "Mobile App Development",
                  "Digital Marketing",
                  "UI / UX Designing",
                  "Logo / Poster Design",
                  "Content Writing",
                ].map((service, index) => (
                  <label key={index} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      className="w-4 h-4 accent-emerald-600"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <textarea
              rows={5}
              name="message"
              placeholder="Type your message"
              required
              className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:border-emerald-500"
            />

            {/* Disclaimer */}
            <p className="text-sm text-emerald-600">
              *This submission form is only for client or project inquiries and
              not meant for submitting job applications. Apply for a job on the
              careers page!
            </p>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-red-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-600 transition-all"
              >
                Submit request
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
