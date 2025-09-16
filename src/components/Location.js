import { useRouter } from "next/router";
import React from "react";

const LocationBox = ({ onSelectLocation }) => {
  const router = useRouter();

  const handleLocationSelect = (location) => {
    // localStorage.setItem("location", location);

    onSelectLocation(location);
    router.push({
      pathname: "/",
      query: { location },
    });
  };

  return (
    <div className="relative w-full h-[100vh] bg-[#f2f0f0] flex items-center justify-center">
      <img src="/images/bg-2.jpg" alt="" className="absolute object-cover w-full h-[100vh] grayscale" />
      <div
        className="bg-white/70 backdrop-blur-sm shadow-lg w-[90%] sm:w-[70%] md:w-[50%] h-[300px] flex flex-col items-center 
      justify-center rounded-lg gap-7 z-[9999] p-[30px]"
      >
        <div className="flex flex-col gap-2 items-center">
          <img src="/images/logo.png" alt="" className="w-[40px] md:w-[80px] h-[40px] md:h-[80px]" />

          <h1 className="text-[18px] md:text-[24px] text-center">Welcome To Valley View Medical.</h1>
        </div>
        <div className="text-center">
          <h2>Select Your Location</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              className="text-black px-4 py-2 rounded border-black hover:border-white border-[1px] hover:bg-white duration-200"
              onClick={() => handleLocationSelect("Whitby")}
            >
              Whitby
            </button>
            <button
              className="text-black px-4 py-2 rounded border-black hover:border-white border-[1px] hover:bg-white duration-200"
              onClick={() => handleLocationSelect("Oshawa")}
            >
              Oshawa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationBox;
