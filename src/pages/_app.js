import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import LocationBox from "@/components/Location";
import { FaWhatsapp } from "react-icons/fa6";
import "@/styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const [location, setLocation] = useState(null);
  const [hasReloaded, setHasReloaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleReload = () => {
      setHasReloaded(true);
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  useEffect(() => {
    if (hasReloaded) {
      // localStorage.removeItem("location");
      // const storedLocation = localStorage.getItem("location");
      // localStorage.setItem("location", selectedLocation);
      setLocation(null);
    } else {
      const storedLocation = localStorage.getItem("location");
      if (storedLocation) {
        setLocation(storedLocation);
      }
    }
  }, [hasReloaded]);

  // const handleSelectLocation = (selectedLocation) => {
  //   setLocation(selectedLocation);
  //   // localStorage.setItem("location", selectedLocation);
  //   router.push("/", undefined, { shallow: true });
  // };

  // if (!location) {
  //   return <LocationBox onSelectLocation={"Whitby"} />;
  // }

  return (
    <div className="relative">
      {/* <Link
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white fixed w-[80px] h-[80px] bottom-[30px] right-[30px] text-[40px] flex items-center justify-center rounded-full z-[9999]"
      >
        <FaWhatsapp />
      </Link> */}
      <Header />
      <Component {...pageProps} location={location} />
      <Footer />
    </div>
  );
}

export default MyApp;
