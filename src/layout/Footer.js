import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Clamp from "@/components/Clamp";

const Footer = () => {
  const locationAccess = typeof window !== "undefined" ? localStorage.getItem("location") : "Whitby";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Address */}
        <div className="flex flex-col gap-6">
          <img src="/images/logo-nobg.png" alt="Logo" className="w-40 md:w-48" />
          <div className="text-gray-300 text-sm" style={{ fontSize: Clamp(0.8, 1.1) }}>
            <h3 className="font-semibold mb-2">ADDRESS</h3>
            {locationAccess === "Whitby" ? (
              <p>
                1916 Dundas St E Unit 6<br />
                Whitby, ON L1N 2L6
              </p>
            ) : (
              <p>
                991 Taunton Rd E B3
                <br />
                Oshawa, ON L1K 0Z7, Canada
              </p>
            )}
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-lg" style={{ fontSize: Clamp(1.1, 1.5) }}>
            Contact Us
          </h3>
          <div className="flex items-center gap-4 text-gray-300">
            <Link href="https://x.com/vmcwhitby" className="hover:text-blue-500">
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100094622814558" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://www.instagram.com/valleyviewmedical/" className="hover:text-blue-500">
              <FaInstagram size={20} />
            </Link>
          </div>
          <ul className="text-gray-300 space-y-1" style={{ fontSize: Clamp(0.8, 1) }}>
            <li>
              <span className="font-semibold">CALL US: </span>
              {locationAccess === "Whitby" ? (
                <Link href="tel:+19054341662" className="hover:text-blue-400">
                  +1 905-434-1662
                </Link>
              ) : (
                <Link href="tel:+19053678510" className="hover:text-blue-400">
                  +1 905-367-8510
                </Link>
              )}
            </li>
            <li>
              <span className="font-semibold">FAX US: </span>
              {locationAccess === "Whitby" ? "+1 905-747-0999" : "289-764-1231"}
            </li>
            <li>
              <span className="font-semibold">EMAIL: </span>
              {locationAccess === "Whitby" ? (
                <Link href="mailto:info@valleyviewmedical.ca" className="hover:text-blue-400">
                  info@valleyviewmedical.ca
                </Link>
              ) : (
                <Link href="mailto:valleyviewharmony@gmail.com" className="hover:text-blue-400">
                  valleyviewharmony@gmail.com
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Information Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-lg" style={{ fontSize: Clamp(1.1, 1.5) }}>
            Information
          </h3>
          <ul className="text-gray-300 space-y-2" style={{ fontSize: Clamp(0.8, 1) }}>
            <li>
              <Link href="/service-fee" className="hover:text-blue-400">
                Uninsured Service Fee
              </Link>
            </li>
            <li>
              <Link href="/policy/clinic-policies" className="hover:text-blue-400">
                Clinic Policies
              </Link>
            </li>
            {locationAccess === "Whitby" && (
              <li>
                <Link href="/policy/prescription-renewal-policy" className="hover:text-blue-400">
                  Prescription Renewals
                </Link>
              </li>
            )}
            <li>
              <Link href="/policy/patient-responsibility" className="hover:text-blue-400">
                Patient Responsibilities
              </Link>
            </li>
            <li>
              <Link href="/policy/patient-rights" className="hover:text-blue-400">
                Patient Rights
              </Link>
            </li>
            <li>
              <Link href="/policy/test-results-notification" className="hover:text-blue-400">
                Test Result Notifications
              </Link>
            </li>
            <li>
              <Link href="/policy/health-card-policy" className="hover:text-blue-400">
                Health Card Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-400 text-center py-6 px-5 md:px-20" style={{ fontSize: Clamp(0.75, 1) }}>
        <p>
          © 2024 Valleyview Medical Centre | Powered by{" "}
          <Link href="https://www.Vtechedge.com" className="hover:text-blue-400">
            VTECH Edge
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
