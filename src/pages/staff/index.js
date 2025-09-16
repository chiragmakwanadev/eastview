import React, { useState } from "react";
import { Data } from "@/static/StaffData";
import Link from "next/link";
import Image from "next/image";
import Clamp from "@/components/Clamp";
import Head from "next/head";

const Index = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const renderData = (category) => {
    const selectedLocation = "Whitby";

    return Data[0][category]
      .filter((item) =>
        selectedLocation === "Oshawa" ? item.oshawa : !item.oshawa
      )
      .map((item, index) => (
        <Link
          href={`/staff/${item.slug}`}
          key={index}
          className="min-w-[250px] w-full sm:w-[22%] text-center flex flex-col h-[420px] rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div className="relative">
            <Image
              src={item.image || "/images/east-logo.png"}
              alt={item.name}
              width={300}
              height={280}
              className="w-[100%] h-[280px] object-cover"
            />
            <div className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3 pt-4 px-4 pb-4">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              {item.title}
            </h3>
            <p
              className="text-gray-800 font-bold text-lg"
              style={{ fontSize: Clamp(1, 1.25) }}
            >
              {item.name}
            </p>
            <div className="w-12 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
        </Link>
      ));
  };

  const tabOptions = [
    { key: "doctors", label: "Doctors" },
    { key: "staff", label: "Administrative Team" },
    { key: "pharmacists", label: "Pharmacists" },
    { key: "manager", label: "Management Team" },
  ];

  return (
    <>
      <Head>
        <title>
          Whitby Doctors at Eastview Medical | Eastview Medical Centre
        </title>
      </Head>

      <section className="relative bg-gradient-to-b from-green-50 to-white py-[100px] padding-x">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
            Meet Our Team
          </span>
          <h1
            className="font-bold text-gray-900 leading-snug"
            style={{ fontSize: Clamp(2, 3) }}
          >
            Our <span className="text-green-600">Health Care Specialists</span>
          </h1>
          <p className="text-gray-600 mt-4 text-[16px] md:text-[18px] leading-relaxed">
            Dedicated professionals committed to providing exceptional
            healthcare services
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 flex flex-wrap gap-2">
            {tabOptions.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-white text-green-700 shadow-md"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
                style={{ fontSize: Clamp(0.9, 1.1) }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Staff Grid */}
        <div className="flex flex-wrap items-center gap-5 w-full">
          {renderData(activeTab)}
        </div>
      </section>
    </>
  );
};

export default Index;
