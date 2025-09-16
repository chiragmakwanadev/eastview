import Link from "next/link";
import React, { useEffect, useState } from "react";
import Clamp from "../Clamp";
import { DiCssdeck } from "react-icons/di";
import { useRouter } from "next/router";

const linkData = [
  {
    href: "https://www.bookmyrefill.com/new/9054351100",
    text: "New Prescription",
  },
  {
    href: "https://www.bookmyrefill.com/refill/9054351100",
    text: "Refill Prescription",
  },
  {
    href: "https://www.bookmypharmacy.com/transfer/9054351100",
    text: "Transfer Prescription",
  },
  { href: "https://www.bookmyshot.com/flu/9054351100", text: "Book Flu Shot" },
  {
    href: "https://www.bookmypharmacy.com/minorailment/9054351100",
    text: "Minor Ailments",
  },
  { href: "https://www.bookmyshot.com/(905)435-1100", text: "Visit Website" },
];

const Landing = () => {
  const [activeCity, setActiveCity] = useState("Whitby");
  const router = useRouter();

  const handleCityChange = (city) => {
    // localStorage.setItem("location", city);
    const savedCity = "Whitby";
    setActiveCity(city);
    router.push({ pathname: router.pathname, query: { location: city } });
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("location");
    if (savedCity) setActiveCity(savedCity);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative flex items-center min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <DiCssdeck size={20} />
                Durham Region Healthcare
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to <span className="text-green-600">Eastview</span>
                  <br />
                  Medical Centre
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your health connected with care. Professional medical services
                  in the heart of Durham Region.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <p className="text-gray-600">
                  Providing comprehensive healthcare services in the Durham
                  Region
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Location
                  </h3>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">V</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Whitby (Dundas)
                    </p>
                    <p className="text-sm text-gray-500">
                      Eastview Medical Centre
                    </p>
                  </div>
                </div>
              </div>

              {/* Pharmacy Info */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  East Whitby IDA Pharmacy
                </h2>
                <p className="text-green-100 mb-4">
                  Professional pharmacy services in the heart of Whitby
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-300 rounded-full"></div>
                    <span>Prescription Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-300 rounded-full"></div>
                    <span>Health Consultations</span>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-3">
                {linkData.map(({ href, text }, index) => (
                  <Link key={index} href={href} className="group">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-300 transition-all duration-300 group-hover:scale-105">
                      <p className="text-sm font-medium text-gray-900 text-center group-hover:text-green-600">
                        {text}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
