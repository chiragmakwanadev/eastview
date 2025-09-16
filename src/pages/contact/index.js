import Clamp from "@/components/Clamp";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Dates = [
  {
    Monday: "9am to 7pm",
    Tuesday: "9am to 7pm",
    Wednesday: "9am to 7pm",
    Thursday: "9am to 7pm",
    Friday: "9am to 5pm",
    Saturday: "9am to 2pm",
    "Sunday/Stat Holidays": "Closed",
  },
];

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:info@eastviewmedical.ca?subject=New Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Message: ${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  const location = "Whitby";

  return (
    <>
      <Head>
        <title>Contact Us | East view Medical Centre</title>
      </Head>
      <div>
        <section className="relative bg-gradient-to-b from-green-50 to-white py-[100px] padding-x">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
              We&apos;re Here to Help
            </span>
            <h1
              className="font-bold text-gray-900 leading-snug"
              style={{ fontSize: Clamp(2, 3) }}
            >
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-gray-600 mt-4 text-[16px] md:text-[18px] leading-relaxed">
              Questions, appointments, or feedback — our team is ready to assist
              you.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Map & Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <p className="text-[14px] md:text-[16px] text-gray-600">
                Accessible Parking Available
              </p>
              <h2
                className="font-semibold text-green-600 mt-2"
                style={{ fontSize: Clamp(1.2, 1.8) }}
              >
                Location
              </h2>
              <p
                className="text-gray-700 pb-4"
                style={{ fontSize: Clamp(1, 1.4) }}
              >
                Unit 4 1200 rossland Rd E whitby L1N 8H3
              </p>
              <div className="rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps?q=Unit%204%2C%201200%20Rossland%20Rd%20E%2C%20Whitby%2C%20ON%20L1N%208H3&z=16&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  style={{ height: Clamp(15, 28) }}
                ></iframe>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="tel:+19054341662" className="inline-block">
                  <span className="px-4 py-2 rounded-xl bg-green-50 text-green-700 border border-green-100">
                    Call: +1-905-556-3240
                  </span>
                </Link>
                <Link
                  href="mailto:info@eastviewmedical.ca"
                  className="inline-block"
                >
                  <span className="px-4 py-2 rounded-xl bg-green-50 text-green-700 border border-green-100">
                    Email: info@eastviewmedical.ca
                  </span>
                </Link>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-[22px] md:text-[24px] font-semibold mb-4 text-green-600">
                New Patient Registration Form
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 col-span-1"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 col-span-1"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 col-span-1"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 col-span-1"
                />
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 col-span-1"
                >
                  <option value="">Select City</option>
                  <option value="Whitby">Whitby</option>
                  <option value="Oshawa">Oshawa</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 h-32 md:col-span-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 md:col-span-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Hours & Note */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <p className="text-[14px] md:text-[16px] text-gray-600">
                Eastview Medical Centre
              </p>
              <h3
                className="font-semibold text-green-600 mt-1 mb-4"
                style={{ fontSize: Clamp(1.2, 1.8) }}
              >
                Visit a Doctor
              </h3>
              <p
                className="text-green-600 mb-6"
                style={{ fontSize: Clamp(1, 1.4) }}
              >
                +1-905-556-3240
              </p>
              <div className="text-[16px]">
                {Object.entries(Dates[0]).map(([day, time]) => (
                  <div
                    key={day}
                    className="grid grid-cols-2 gap-x-2 pb-2 items-center"
                  >
                    <p className="font-semibold text-gray-800 whitespace-nowrap">
                      {day}:
                    </p>
                    <p className="text-gray-700">{time}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex items-center">
              <span className="flex flex-col md:flex-row gap-2 md:items-end">
                <h4 className="font-bold text-[18px] text-gray-900">NOTE:</h4>
                <span className="text-gray-700">
                  Times may vary depending on doctor’s availability
                </span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
