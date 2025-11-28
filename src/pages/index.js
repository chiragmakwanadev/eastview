import { Montserrat, DM_Sans, Poppins } from "next/font/google";
import Landing from "@/components/landing/Landing";
import Registration from "@/components/landing/Registration";
import Priscription from "@/components/landing/Priscription";
import News from "@/components/landing/News";
import Welcome from "@/components/landing/Welcome";
import Specialist from "@/components/landing/Specialist";
import Why from "@/components/landing/Why";
import Head from "next/head";
import Testimonial from "@/components/landing/Testimonial";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={` ${poppins.variable}`}>
      <Head>
        <title>Care4You Medical Centre </title>
      </Head>
      <main>
        <Landing />
        <Registration />
        {/* <Priscription /> */}
        <News />
        <Welcome />
        {/* <Specialist /> */}
        <Why />
        {/* <Testimonial /> */}
      </main>
    </div>
  );
}
