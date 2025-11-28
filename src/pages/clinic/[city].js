import Clamp from "@/components/Clamp";
import Link from "next/link";
import { useRouter } from "next/router";
import { DiCssdeck } from "react-icons/di";
import { GoDotFill } from "react-icons/go";
import { LiaDotCircleSolid } from "react-icons/lia";

const ClinicDetail = () => {
  const router = useRouter();
  const { city } = router.query;

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
    {
      href: "https://www.bookmyshot.com/flu/9054351100",
      text: "Book Flu Shot",
    },
    {
      href: "https://www.bookmypharmacy.com/minorailment/9054351100",
      text: "Minor Ailments",
    },
    {
      href: "https://www.bookmyshot.com/(905)435-1100",
      text: "Visit Website",
    },
  ];

  const clinicData = {
    Toronto: {
      name: "Toronto",
      address: "123 Toronto Street, Toronto, ON",
      contact: "123-456-7890",
    },
    Vancouver: {
      name: "Vancouver Clinic",
      address: "456 Vancouver Avenue, Vancouver, BC",
      contact: "234-567-8901",
    },
    Montreal: {
      name: "Montreal Clinic",
      address: "789 Montreal Road, Montreal, QC",
      contact: "345-678-9012",
    },
    Calgary: {
      name: "Calgary Clinic",
      address: "101 Calgary Drive, Calgary, AB",
      contact: "456-789-0123",
    },
  };

  const Dates = [
    {
      Monday: "9am to 7pm",
      Tuesday: "9am to 7pm",
      Wednesday: "9am to 7pm",
      Thursday: "9am to 7pm",
      Friday: "9am to 5pm",
      Saturday: "9am to 2pm",
      "Sunday/Stat Holidays": "Closed",
    },
  ];

  const clinic = city ? clinicData[city] : null;

  if (!clinic) {
    return (
      <div>
        <p>
          Clinic data is not available. Please select a valid clinic location.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full relative">
        <img
          src="/images/landing3.jpg"
          alt=""
          className="w-full object-cover h-[92vh]"
        />
        <div className="absolute bottom-[45%] md:bottom-[30%] xl:bottom-[18%] left-[20px] xl:left-[50px] flex flex-col justify-center text-white gap-5">
          <div className="flex flex-col gap-6 xl:gap-4">
            <p className="flex items-center  text-[16px] xl:text-[20px] gap-3">
              <DiCssdeck size={30} />
              Consult top doctors anytime, from any location in Canada.
            </p>
            <div className="flex flex-col md:flex-row items-start xl:items-center text-white gap-2 xl:gap-4">
              <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium">
                Select Your location:
              </p>
              <div className="flex gap-2 flex-wrap">
                <Link href="/clinic/Toronto">
                  <div
                    className="bg-white px-[10px] xl:px-[20px] py-[3px] xl:py-[5px] text-black rounded-full
      border-[1px] border-white duration-200 flex items-center gap-2 text-center justify-center w-full cursor-pointer"
                  >
                    Toronto
                  </div>
                </Link>
                <Link href="/clinic/Vancouver">
                  <div
                    className="bg-white px-[10px] xl:px-[20px] py-[3px] xl:py-[5px] text-black rounded-full
      border-[1px] border-white duration-200 flex items-center gap-2 text-center justify-center w-full cursor-pointer"
                  >
                    Vancouver
                  </div>
                </Link>
                <Link href="/clinic/Montreal">
                  <div
                    className="bg-white px-[10px] xl:px-[20px] py-[3px] xl:py-[5px] text-black rounded-full
      border-[1px] border-white duration-200 flex items-center gap-2 text-center justify-center w-full cursor-pointer"
                  >
                    Montreal
                  </div>
                </Link>
                <Link href="/clinic/Calgary">
                  <div
                    className="bg-white px-[10px] xl:px-[20px] py-[3px] xl:py-[5px] text-black rounded-full
      border-[1px] border-white duration-200 flex items-center gap-2 text-center justify-center w-full cursor-pointer"
                  >
                    Calgary
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <h1
            className={`font-medium`}
            style={{ fontSize: Clamp(2, 4.6), lineHeight: Clamp(2, 4.6) }}
          >
            WELCOME TO Care4You <br /> MEDICAL CENTRE ({clinic.name})
          </h1>
          <p className="text-[24px]" style={{ fontSize: Clamp(1, 1.5) }}>
            Your health connected with care!
          </p>
          <Link
            href="mailto:info@Care4Youmedical.ca"
            className="w-[100px] xl:w-[150px]"
          >
            <button
              className="bg-transparent hover:bg-white px-[10px] xl:px-[20px] py-[5px] xl:py-[8px] text-white hover:text-black  rounded-full
            border-[1px] border-white duration-200 flex items-center gap-2 text-center justify-center w-[150px]"
              style={{ fontSize: Clamp(0.75, 1) }}
            >
              <LiaDotCircleSolid size={20} />
              Email Us
            </button>
          </Link>
        </div>
        <div className="xl:absolute bottom-[-120px] xl:bottom-[-70px] right-0 xl:right-[12.5%] left-0 xl:left-[12.5%] bg-white p-[30px] rounded-none xl:rounded-[10px] shadow-xl">
          <div className="flex flex-col">
            <h1
              className="font-medium text-black text-center"
              style={{ fontSize: Clamp(1, 1.5) }}
            >
              EAST WHITBY IDA PHARMACY
            </h1>
          </div>
          <div className="flex pt-[20px] gap-3 xl:gap-2 w-full justify-center">
            <div
              className={`flex flex-row flex-wrap gap-2 font-medium items-center justify-center`}
              style={{ fontSize: Clamp(0.75, 1) }}
            >
              {linkData.map(({ href, text }, index) => (
                <Link key={index} href={href}>
                  <h1
                    className="bg-transparent border-black hover:bg-black px-[22px] py-[8px] text-black hover:text-white w-full text-center rounded-full
            border-[1px] duration-200 flex items-center gap-2"
                  >
                    <GoDotFill />
                    {text}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f0f0] pt-[150px]">
        <div className="bg-white margin-x mb-[50px] p-7 rounded-xl flex flex-col gap-1 shadow-xl">
          <div className="flex flex-row-reverse bg-white rounded-xl gap-[40px]">
            <div className="flex flex-col w-full xl:w-[50%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            </div>
            <div className="flex flex-col  gap-4 w-[50%] justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="text-[18px] text-blue-600 bg-blue-200 w-[250px] p-[5px] text-center rounded-3xl">
                  New Patient Registration
                </h1>
                <p className="text-[18px]">
                  Due to high demand, we are temporarily suspending online
                  patient registrations. We are still accepting new patients,
                  please register in-person at the clinic.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className=" font-medium text-blue-600 text-[24px]">
                  Location
                </h1>
                <p className="font-light " style={{ fontSize: Clamp(1, 1.5) }}>
                  1916 Dundas St E Unit 6, Whitby
                </p>
                <p className="text-[16px] font-thin">
                  Accessible Parking Available
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-full gap-10 pt-[50px]">
            <img
              src="/images/landing2.jpg"
              alt=""
              className="w-[50%] object-cover rounded-xl"
            />
            <div className="flex flex-col gap-2 w-full xl:w-[50%]">
              <h1 className="text-[18px] text-blue-600 bg-blue-200 w-[250px] p-[5px] text-center rounded-3xl">
                Visit a Doctor
              </h1>
              <p
                className=" font-normal pt-[10px] text-blue-600"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                +1 905-434-1662
              </p>
              <div className="text-[16px]">
                {Object.entries(Dates[0]).map(([day, time]) => (
                  <div key={day} className="flex  gap-4 pb-2 items-center">
                    <p className="font-bold">{day}:</p>
                    <p>{time}</p>
                  </div>
                ))}
              </div>
              <span className="flex items-start xl:items-end">
                <h1 className="font-bold text-[18px]">NOTE:</h1>
                Times may vary depending on doctor’s availability
              </span>
              <p style={{ fontSize: Clamp(0.75, 1) }}>
                As a community-oriented medical clinic in Whitby, we offer a
                wide range of services designed to address all of your health
                care needs. From routine check-ups, scheduled appointments to
                see your family doctor, walk-in patient assessments and
                preventive care, we aim to be your one-stop solution for
                maintaining and enhancing your well-being.{" "}
              </p>
              <button
                className="bg-blue-600 px-[20px] py-[8px] w-full md:w-[250px] text-white
           hover:text-blue-600 border-[1px] border-transparent hover:border-blue-600 hover:bg-white duration-500 rounded-xl mt-[10px]"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white text-black padding-x py-[80px] flex flex-col xl:flex-row gap-5 items-start xl:items-center">
          <h1
            className=" text-start xl:text-right font-semibold leading-[40px]"
            style={{ fontSize: Clamp(1.5, 2.25) }}
          >
            Appointment <br /> Cancellation <br /> Policy
          </h1>
          <p style={{ fontSize: Clamp(1, 1.25) }}>
            We kindly ask that you provide our clinic with a minimum of 24
            hours’ notice if you are unable to attend your appointment. Failure
            to attend or provide proper notice of cancellation of scheduled
            appointments will result in a $40 no-show fee. Please note that
            three or more no-show incidents may result in dismissal at your
            physician’s discretion. Thank you for your understanding and
            cooperation.
          </p>
        </div>
      </div>
    </>
  );
};

export default ClinicDetail;
