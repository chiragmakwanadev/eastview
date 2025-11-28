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
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex items-center min-h-screen pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-12 lg:pb-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/lan2.jpg')`,
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-90 text-green-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                <DiCssdeck size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">
                  Durham Region Healthcare
                </span>
                <span className="xs:hidden">Durham Healthcare</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Welcome to <span className="text-green-400">Care4You</span>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Medical Centre
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your health connected with care. Professional medical services
                  in the heart of Durham Region.
                </p>
              </div>

              {/* CTA */}
              <div className="">
                <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto lg:mx-0">
                  Providing comprehensive healthcare services in the Durham
                  Region
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Location Card */}
              <div className="bg-transparent bg-opacity-95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    Location
                  </h3>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-xs sm:text-sm">
                      V
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base">
                      Care4You (Rossland)
                    </p>
                    <p className="text-xs sm:text-sm text-white">
                      Care4You Medical Centre
                    </p>
                  </div>
                </div>
              </div>

              {/* Pharmacy Info */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 sm:p-6 text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  East Whitby IDA Pharmacy
                </h2>
                <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base">
                  Professional pharmacy services in the heart of Whitby
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-300 rounded-full flex-shrink-0"></div>
                    <span>Prescription Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-300 rounded-full flex-shrink-0"></div>
                    <span>Health Consultations</span>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {linkData.map(({ href, text }, index) => (
                  <Link key={index} href={href} className="group">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg border border-white border-opacity-20 hover:shadow-xl hover:border-green-300 hover:bg-opacity-20 transition-all duration-300 group-hover:scale-105">
                      <p className="text-sm sm:text-base font-medium text-white text-center group-hover:text-green-300 leading-tight">
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
