import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">

        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Thank You!
        </h2>

        <p className="text-gray-600 mb-6">
          Your request has been submitted successfully.
          Our team will contact you shortly.
        </p>

        <Link
          to="/"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
}
