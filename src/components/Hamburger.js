import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { PolicyData } from "@/static/PolicyData";
// import { Data as StaffData } from "@/static/StaffData";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isStaffOpen, setIsStaffOpen] = useState(false);

  const policyTopics = Object.keys(PolicyData);

  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePolicyDropdown = () => setIsPolicyOpen(!isPolicyOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsPolicyOpen(false);
      setIsStaffOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, router]);

  return (
    <div>
      <button className=" xl:hidden text-black" onClick={toggleMenu}>
        <RxHamburgerMenu size={24} />
      </button>

      <div
        className={`fixed top-0 right-0 w-full bg-white text-black h-full z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-5">
          <button onClick={toggleMenu}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-5">
          <li className="flex justify-between items-center px-5 py-3 border-b-[1px] border-black">
            <Link href="/staff">OUR STAFF</Link>
          </li>
          {isStaffOpen && (
            <ul className="pl-5 space-y-2">
              {data.map((items, index) => (
                <li key={index}>
                  <Link href={`/staff/${items.slug.current}`}>
                    {items.categories &&
                    items.categories.some((category) =>
                      category.toLowerCase().includes("pharmacist")
                    )
                      ? `Pharmacist ${items.name}`
                      : items.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/assistant">Staff Assistant</Link>
              </li>
            </ul>
          )}

          <li
            className="flex justify-between items-center px-5 py-3 border-b-[1px] border-black"
            onClick={togglePolicyDropdown}
          >
            <Link href="/policy/clinic-policies">CLINIC POLICIES</Link>
            <button>+</button>
          </li>
          {isPolicyOpen && (
            <ul className="pl-5 space-y-2">
              {policyTopics.map((topic) => (
                <li key={topic}>
                  <Link href={`/policy/${PolicyData[topic][0].slug}`}>
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <li className="px-5 py-3 border-b-[1px] border-black">
            <Link href="/news">NEWS</Link>
          </li>
          <li className="px-5 py-3 border-b-[1px] border-black">
            <Link href="/contact">CONTACT US</Link>
          </li>
          <li className="px-5 py-2 w-[250px] bg-blue-400 rounded-md mt-5">
            <Link href="/news/4">BECOME A PATIENT</Link>
          </li>
          <li className="bg-red-500 px-5 py-2  rounded-md w-[250px]">
            <Link href="https://ocean.cognisantmd.com/intake/patients.html?linkRef=04f9eeaf-8434-4153-aa26-2d0c910f4020#/online-booking">
              BOOK APPOINTMENT
            </Link>
          </li>
          <li className="bg-red-500 px-5 py-2  rounded-md w-[250px]">
            <Link href="https://www.bookmyshot.com/9054351100">PHARMACY</Link>
          </li>
        </ul>

        <ul className="flex justify-center space-x-4 p-5">
          <li>
            <Link href="https://x.com/vmcwhitby">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100094622814558">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/Care4Youmedical/">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
