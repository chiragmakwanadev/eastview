import React from "react";
import Clamp from "../Clamp";
import { HiCheckCircle } from "react-icons/hi2";

const Welcome = () => {
  const location = "Whitby";

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-[100px] padding-x">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
          Caring for Your Health, Every Step of the Way
        </span>
        <h1
          className="font-bold text-gray-900 leading-snug"
          style={{ fontSize: Clamp(2, 3) }}
        >
          Welcome to{" "}
          <span className="text-green-600">Eastview Medical Centre</span>
        </h1>
        <p className="text-gray-600 mt-4 text-[16px] md:text-[18px] leading-relaxed">
          We combine compassionate care with cutting-edge medical expertise to
          keep you and your family healthy.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-gray-700">
          <p className="text-[16px] md:text-[17px] leading-relaxed">
            At Eastview Medical Centre, your well-being is at the heart of
            everything we do. Whether you need a routine check-up or urgent
            care, our dedicated doctors and staff are ready to provide the best
            healthcare experience.
          </p>

          <h2
            className="font-semibold text-gray-900"
            style={{ fontSize: Clamp(1.1, 1.5) }}
          >
            Why Patients Trust Us
          </h2>

          {/* Feature Cards */}
          <div className="grid gap-4">
            {[
              "Advanced technology for accurate diagnostics and effective treatment",
              "Personalized care tailored to your unique health needs",
              "On-site pharmacy for convenient prescriptions",
              "Modern facilities designed for comfort and ease",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl shadow-md p-4"
              >
                <HiCheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                <span className="text-[15px] md:text-[16px] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <h2
            className="font-semibold text-gray-900 mt-6"
            style={{ fontSize: Clamp(1.1, 1.5) }}
          >
            Our Commitment
          </h2>
          <p className="text-[15px] md:text-[16px] leading-relaxed">
            From our welcoming reception to state-of-the-art exam rooms, every
            detail is designed for your comfort. We listen, we care, and we
            partner with you to achieve lasting health.
          </p>
        </div>

        {/* Image Section with Card Effect */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300">
            {location === "Whitby" ? (
              <img
                src="/images/reception.jpg"
                alt="Whitby Clinic Reception"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            ) : (
              <img
                src="/images/oshawa-rec.jpeg"
                alt="Oshawa Clinic Reception"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            )}
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
