import Clamp from "@/components/Clamp";
import { Newsdata } from "@/static/NewsData";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(Newsdata.length / itemsPerPage);

  const currentItems = Newsdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const truncateText = (text) => {
    const words = text.split(" ");
    return words.length > 25 ? `${words.slice(0, 25).join(" ")}...` : text;
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Head>
        <title>
          What&apos;s new at Care4You Medical Centre | Care4You Medical Centre
        </title>
      </Head>
      <div>
        <section className="relative bg-gradient-to-b from-green-50 to-white py-[100px] padding-x">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
              Latest News & Updates
            </span>
            <h1
              className="font-bold text-gray-900 leading-snug"
              style={{ fontSize: Clamp(2, 3) }}
            >
              Stay <span className="text-green-600">Informed</span>
            </h1>
            <p className="text-gray-600 mt-4 text-[16px] md:text-[18px] leading-relaxed">
              Get the latest news, updates, and health information from Care4You
              Medical Centre
            </p>
          </div>

          {/* News Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentItems.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-gray-500 text-sm font-medium">
                        {news.date}
                      </p>
                      <span className="text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
                        {news.tag}
                      </span>
                    </div>

                    <h2
                      className="font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                      style={{ fontSize: Clamp(1.1, 1.4) }}
                    >
                      {news.title}
                    </h2>

                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                      {truncateText(news.description)}
                    </p>

                    <Link href={`/news/${news.id}`} className="inline-block">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md w-full">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-200"
                }`}
                style={{ fontSize: Clamp(0.9, 1.1) }}
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                <span
                  className="text-gray-600 font-medium"
                  style={{ fontSize: Clamp(0.9, 1.1) }}
                >
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-200"
                }`}
                style={{ fontSize: Clamp(0.9, 1.1) }}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
