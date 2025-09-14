import React, { useState } from "react";
import Clamp from "../Clamp";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    question: "Comprehensive & Personalized Healthcare",
    answer:
      "Every patient is unique, and so is their healthcare journey. We take the time to listen, assess, and tailor our services to meet your specific needs. From routine check-ups to specialist referrals, we are committed to your long-term wellness.",
  },
  {
    question: "Advanced Technology for Accurate & Efficient Care",
    answer:
      "We invest in cutting-edge medical technology to ensure precise diagnostics, faster treatment, and better outcomes. Our clinic uses electronic medical records, modern examination rooms, and diagnostic tools for seamless care.",
  },
  {
    question: "A Patient-Centered Approach",
    answer:
      "We prioritize clear communication, compassionate support, and a stress-free experience. Our multilingual staff ensures that every patient feels heard, valued, and cared for.",
  },
  {
    question: "On-Site Pharmacy for Your Convenience",
    answer: "Our on-site pharmacy allows you to fill prescriptions quickly and easily. Get immediate access to medications and professional guidance from expert pharmacists.",
  },
  {
    question: "Commitment to Your Family’s Health",
    answer: "From newborns to seniors, we provide comprehensive family medicine services, including pediatrics, women’s health, and geriatric care.",
  },
  {
    question: "Convenient & Accessible Location",
    answer: "Our clinic is centrally located with ample parking, wheelchair access, flexible appointments, and easy public transport options.",
  },
  {
    question: "A Team That Truly Cares",
    answer:
      "Our team of professionals is passionate about helping you live your healthiest life. We are your partners in health, offering seamless and empowering healthcare experiences.",
  },
];

const Why = () => {
  // First question open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-[100px] padding-x">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">Your health connected with care!</span>
        <h1 className="font-bold text-gray-900 leading-snug" style={{ fontSize: Clamp(2, 3) }}>
          Why Choose <span className="text-green-600">Valleyview Medical?</span>
        </h1>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300">
            <img src="/images/per.jpg" alt="Why Valleyview Medical" className="w-full h-[450px] object-cover" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-50"></div>
        </div>

        {/* Right Side FAQ */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? <HiMinus className="w-5 h-5 text-green-600" /> : <HiPlus className="w-5 h-5 text-green-600" />}
                </button>

                {openIndex === index && <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
