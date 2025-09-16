import React, { useEffect, useRef, useState } from "react";
import Clamp from "../Clamp";
import { Rating } from "@mui/material";

const Data = [
  {
    reviewer: "Vic Tyrer",
    rating: 5,
    date: "3 months ago",
    review:
      "If you are looking for a doctor we highly recommend Eastview Medical Centre. My wife and I registered in person and we're assigned a doctor immediately. We met with Dr. Francis Aluh. He is amazing. He took his time with us, has excellent communication skills, and is very easy to speak with. The Clinic reception staff are well organized, pleasant and efficient in calling patient to see their doctor.",
  },
  {
    reviewer: "Saad Faize",
    rating: 5,
    date: "2 months ago",
    review:
      "Exceptional care at Eastview Medical Centre! Dr. Emmanuel Erdogan is incredibly supportive, going above and beyond for patient well-being. The help desk and pharmacy staff are professional, efficient, and caring. The quality of care far exceeded my expectations. Highly recommend this clinic and its services!",
  },
  {
    reviewer: "telugammayi Dhanasree",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Valley View hospital exceeded our expectations! Dr. Emmanuel Adeogun provided thorough care during my pregnancy, closely monitoring my health and ensuring the best outcomes. The staff is kind, patient, and accommodating despite the hospital being busy. We’re beyond grateful for their support!",
  },
  {
    reviewer: "Bhakti Patel",
    rating: 5,
    date: "5 months ago",
    review:
      "I visited as a walk-in and met Dr. Francis, who is an amazing doctor. The administrator was incredibly helpful and made the whole process smooth and easy for me. I didn’t have to wait long, which was a big plus. Overall, a great experience, and I would definitely go there again! If you need any help, Musab is your guy—his expertise in IT and admin tasks really stands out.",
  },
  {
    reviewer: "areebah iq8",
    rating: 5,
    date: "a month ago",
    review:
      "Been going here ever since I was 6 and the current staff and environment are the best yet. Reception has improved, pharmacy is great (still have the same pharmacist since my first time there) and doctors are on top of it. The best part though is that any concerns you have regarding staff, appointments, rescheduling etc. are all taken seriously and changes are made. Good work Eastview!",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % Data.length);
    };
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <section className="relative py-[100px] bg-gradient-to-r from-green-50 via-white to-green-50">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
          Testimonials
        </span>
        <h2
          className="font-bold text-gray-900 leading-snug"
          style={{ fontSize: Clamp(1.5, 2.5) }}
        >
          What Our Patients Say
        </h2>
      </div>

      {/* Slider */}
      <div className="relative max-w-5xl mx-auto px-6">
        {Data.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0 absolute"}`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center">
              <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed italic mb-6">
                “{item.review}”
              </p>
              <div className="flex flex-col items-center gap-1">
                <h4 className="font-semibold text-gray-900">{item.reviewer}</h4>
                <span className="text-gray-500 text-sm">{item.date}</span>
                <Rating value={item.rating} readOnly size="small" />
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${index === current ? "bg-green-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
