import Link from "next/link";
import React from "react";
import Clamp from "./Clamp";

const Banner = ({
  subtitle,
  backgroundImage = "/images/banner-bg.jpeg",
  buttonText,
}) => {
  const locationAccess = "Whitby";

  return (
    <div className="relative w-full" style={{ height: Clamp(22, 35) }}>
      <div className="flex flex-col items-center justify-center text-center text-black px-4 border-none h-full">
        <h1 className="text-[16px] xl:text-[18px] font-normal mb-2 bg-white px-5 py-2 rounded-full">
          Your health connected with care!
        </h1>
        <p className="font-bold mb-2" style={{ fontSize: Clamp(1.4, 3) }}>
          {subtitle}
        </p>
        {locationAccess === "Whitby" ? (
          <Link
            href="mailto:info@Eastviewmedical.ca"
            className="px-3 md:px-6 py-1 md:py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition duration-300 text-[14px]"
          >
            {buttonText}
          </Link>
        ) : (
          <Link
            href="mailto:Eastviewharmony@gmail.com"
            className="px-3 md:px-6 py-1 md:py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition duration-300 text-[14px]"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
