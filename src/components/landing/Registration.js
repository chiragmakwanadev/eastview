import React from "react";
import {
  HiMapPin,
  HiClock,
  HiExclamationTriangle,
  HiUserGroup,
} from "react-icons/hi2";

import Clamp from "../Clamp";

const Dates = {
  Monday: "9am to 7pm",
  Tuesday: "9am to 7pm",
  Wednesday: "9am to 7pm",
  Thursday: "9am to 7pm",
  Friday: "9am to 5pm",
  Saturday: "9am to 2pm",
  "Sunday/Stat Holidays": "Closed",
};

const oshawaDates = {
  Monday: "9am to 7pm",
  Tuesday: "9am to 7pm",
  Wednesday: "9am to 7pm",
  Thursday: "9am to 7pm",
  Friday: "9am to 7pm",
  "Sat/Sun": "10am to 3pm",
  "Stat Holidays": "Closed",
};

const Registration = () => {
  const locationAccess = "Whitby";

  const isWhitby = locationAccess === "Whitby";
  const timings = isWhitby ? Dates : oshawaDates;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="margin-x grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left Section - Map & Location */}
        <div className="space-y-6">
          <iframe
            src={
              isWhitby
                ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.078275663616!2d-78.84900402362726!3d43.94217347107847"
            }
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl w-full shadow-lg"
            style={{ height: Clamp(18, 32) }}
          ></iframe>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-green-700">
              <HiMapPin className="w-5 h-5" />
              <h2 className="font-semibold text-lg">Our Location</h2>
            </div>
            <p className="text-gray-700 font-medium">
              {isWhitby
                ? "1916 Dundas St E Unit 6, Whitby"
                : "991 Taunton Rd E B3, Oshawa, ON L1K 0Z7, Canada"}
            </p>
            <p className="text-sm text-gray-500">
              🚗 Accessible Parking Available
            </p>
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="flex flex-col gap-8">
          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-sm font-medium text-green-600 bg-green-50 px-4 py-2 rounded-full">
                Accepting New Patients
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Register as a new patient online from the comfort of your home, or
              visit our clinic and let our friendly staff assist you. At
              Eastview Medical Centre, we ensure a smooth registration process
              and provide high-quality, compassionate care.
            </p>
          </div>

          {/* Clinic Timings */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-2 text-green-700 mb-4">
              <HiClock className="w-5 h-5" />
              <h2 className="font-semibold text-lg">Clinic Timings</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {Object.entries(timings).map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-2"
                >
                  <span className="font-medium text-gray-900">{day}</span>
                  <span className="text-gray-600">{time}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4 flex gap-2 items-center">
              <HiExclamationTriangle className="w-4 h-4 text-amber-700" />
              <p className="text-sm text-amber-700">
                Times may vary depending on doctor’s availability
              </p>
            </div>
          </div>

          {/* Policy */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-2 text-green-700 mb-3">
              <HiUserGroup className="w-5 h-5" />
              <h2 className="font-semibold text-lg">Cancellation Policy</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Please provide at least 24 hours’ notice if you cannot attend your
              appointment. Missing appointments without notice will incur a $40
              no-show fee. Repeated no-shows may result in dismissal at your
              physician’s discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
