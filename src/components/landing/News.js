import React, { useState } from "react";
import Link from "next/link";
import Clamp from "@/components/Clamp";
import { Newsdata } from "@/static/NewsData";

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(Newsdata.length / itemsPerPage);

  const currentItems = Newsdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const truncateText = (text, wordLimit = 25) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(" ")}...`
      : text;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const featured = currentItems[0];
  const others = currentItems.slice(1);

  return (
    <section className="bg-gray-50 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-blue-50 text-[#079ADF] text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
          Care4You Updates
        </span>
        <h2
          className="font-extrabold text-gray-900 leading-snug"
          style={{ fontSize: Clamp(1.7, 2.8) }}
        >
          Latest Health Insights & News
        </h2>
        <p className="text-gray-600 mt-3 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Discover recent articles, health tips, and clinic updates from
          Care4You Medical Centre.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-16">
        {/* Featured Article */}
        {featured && (
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="h-96 bg-gray-300 flex items-center justify-center text-gray-900 font-bold text-2xl md:text-4xl text-center p-6">
              {featured.title}
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-40 px-3 py-1 rounded-md">
              {featured.date}
            </div>
            <Link
              href={`/news/${featured.id}`}
              className="absolute bottom-4 right-4"
            >
              <button className="bg-[#079ADF] hover:bg-[#1A4087] text-white px-5 py-2 rounded-lg transition duration-200">
                Read More
              </button>
            </Link>
          </div>
        )}

        {/* Other Articles - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {others.map((news) => (
            <div
              key={news.id}
              className="break-inside-avoid relative bg-white rounded-2xl shadow-md overflow-hidden mb-6 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center font-semibold text-gray-900 text-lg md:text-xl text-center p-4">
                {news.title}
              </div>
              <div className="p-5 flex flex-col gap-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {truncateText(news.description, 20)}
                </p>
                <p className="text-gray-400 text-xs">{news.date}</p>
                <Link href={`/news/${news.id}`} className="mt-3">
                  <button className="w-full bg-[#079ADF] hover:bg-[#1A4087] text-white px-4 py-2 rounded-lg transition duration-200">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 rounded-lg border font-medium ${
                currentPage === idx + 1
                  ? "bg-[#079ADF] text-white border-[#079ADF]"
                  : "bg-white text-gray-700 hover:bg-gray-200 border-gray-300"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
