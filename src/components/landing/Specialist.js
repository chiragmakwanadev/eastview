import Banner from "@/components/Banner";
import React, { useState } from "react";
import Link from "next/link";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import { Data } from "@/static/StaffData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const renderData = (category) => {
    return Data[0][category].map((item, index) => (
      <Link key={index} href={`/staff/${item.slug}`} className="min-w-[300px] w-full sm:w-[31%] p-4 bg-white text-center flex flex-col h-[500px] rounded-xl shadow-md">
        <img src={item.image || "/default-image.jpg"} alt={item.name} className="w-[100%] h-[370px] object-cover rounded-lg overflow-hidden" />
        <div className="flex flex-col gap-2 pt-3">
          <h3 className="text-[14px] font-normal">{item.title}</h3>
          <p className="text-green-600 font-bold" style={{ fontSize: Clamp(1, 1.25) }}>
            {item.name}
          </p>
        </div>
      </Link>
    ));
  };

  return (
    <>
      <div className="padding-x py-[50px] flex flex-col bg-white">
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab("doctors")}
            className={`px-6 py-2 ${activeTab === "doctors" ? "bg-green-100 p-10 rounded-xl text-green-800" : "text-gray-500"}`}
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Doctors
          </button>
          <button
            onClick={() => setActiveTab("pharmacists")}
            className={`px-6 py-2 ${activeTab === "pharmacists" ? "bg-green-100 p-10 rounded-xl text-green-800" : "text-gray-500"}`}
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Pharmacists
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-5 w-full">{activeTab === "doctors" ? renderData("doctors") : renderData("pharmacists")}</div>
      </div>
    </>
  );
};

export default Index;
