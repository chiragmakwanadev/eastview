import Link from "next/link";
import React from "react";
import Clamp from "../Clamp";

const hours = {
  "Monday-Thursday": "9am-7pm",
  Friday: "9am-5pm",
  Saturday: "9am-2pm",
  Sunday: "Closed",
};

const Prescription = () => {
  return (
    <div className="padding-x py-[80px] pt-[150px] flex flex-col xl:flex-row-reverse gap-10 bg-[#f2f0f0]">
      <div className="flex flex-col gap-4 w-full xl:w-[40%] rounded-xl">
        <img src="/images/ida.png" alt="" className="w-[120px] h-[40px] object-cover" />
        <div className="flex flex-col gap-2">
          <p className="text-[18px] text-green-600 bg-green-200 w-[250px] p-[5px] text-center rounded-3xl">EAST WHITBY IDA</p>
          <h1 className="font-bold text-red-600" style={{ fontSize: Clamp(1.5, 2.25) }}>
            Fill a Prescription
          </h1>
          <p className="font-light text-red-600" style={{ fontSize: Clamp(1, 1.5) }}>
            905-435-1100
          </p>
        </div>
        <div>
          {Object.entries(hours).map(([days, time]) => (
            <div key={days} className="flex flex-row gap-4 pb-2">
              <p className="font-bold">{days}:</p>
              <p className="font-normal">{time}</p>
            </div>
          ))}
        </div>

        <Link href="https://www.bookmyshot.com/9054351100">
          <button
            className="bg-green-600 px-[20px] py-[8px] w-full md:w-[250px] mt-[20px] text-white
            hover:text-green-600 border-[1px] border-transparent hover:border-green-600 hover:bg-white duration-500 rounded-xl"
          >
            FILL A PRISCRIPTION
          </button>
        </Link>
      </div>
      <div className="w-full xl:w-[60%] flex flex-col gap-4 items-start">
        <div>
          <img src="/images/hospital.jpg" alt="" className="rounded-t-xl" />
          <p className="bg-green-600 p-[15px] text-white text-center w-full rounded-b-xl" style={{ fontSize: Clamp(1, 1.5) }}>
            SAVE 20% on over-the-counter items
          </p>
        </div>
        <p>At East Whitby Pharmacy, we are dedicated to providing exceptional health care services to improve the well-being of our community.</p>
        <p>
          Our knowledgeable and friendly team of pharmacists and staff are committed to meeting the unique needs of each of our patients.{" "}
          <Link href="/staff" className="text-red-600 hover:text-green-600 cursor-pointer duration-300">
            Our multilingual staff{" "}
          </Link>
          can help you in English, Gujrati, Punjabi, Hindi, and Urdu.
        </p>
        <p>We look forward to serving you and being a partner in your healthcare journey.</p>
      </div>
    </div>
  );
};

export default Prescription;
