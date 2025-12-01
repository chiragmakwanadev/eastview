import { Newsdata } from "@/static/NewsData";
import { useRouter } from "next/router";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaPhone, FaLink, FaXTwitter } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Clamp from "@/components/Clamp";
import Head from "next/head";

export const getStaticPaths = async () => {
  const paths = Newsdata.map((news) => ({
    params: { id: news.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const newsItem = Newsdata.find((item) => item.id === parseInt(params.id, 10));

  return {
    props: {
      newsItem,
    },
  };
};

const NewsDetail = ({ newsItem }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  const location = "Whitby";

  return (
    <>
      <Head>
        <title>{newsItem.title} | Care4You Medical Centre</title>
      </Head>

      <section className="relative bg-gradient-to-b from-blue-50 to-white py-[100px] padding-x">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-blue-50 text-[#079ADF] text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
            Latest News
          </span>
          <h1
            className="font-bold text-gray-900 leading-snug"
            style={{ fontSize: Clamp(2, 3) }}
          >
            {newsItem.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <p className="text-gray-500 text-sm font-medium">{newsItem.date}</p>
            <span className="text-xs text-[#079ADF] bg-blue-50 px-3 py-1 rounded-full font-medium">
              {newsItem.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="prose prose-lg max-w-none">
                <p
                  className="text-gray-700 leading-relaxed text-[16px] md:text-[18px]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {newsItem.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link href="/contact" className="inline-block">
                  <button className="bg-[#079ADF] hover:bg-[#1A4087] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Banner Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-48 w-full flex items-center justify-center">
                <img
                  src="/images/east-logo-main.jpeg"
                  alt="Care4You Medical Centre"
                  className="w-[200px] object-cover"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3
                  className="font-bold text-[#079ADF] mb-4"
                  style={{ fontSize: Clamp(1.2, 1.5) }}
                >
                  Contact Us
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <IoPersonSharp className="w-5 h-5 text-[#079ADF] mt-1 shrink-0" />
                    <p>Care4You Medical Centre</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <AiFillHome className="w-5 h-5 text-[#079ADF] mt-1 shrink-0" />
                    <p>Unit 3 1200 rossland Rd E whitby L1N 8H3</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaPhone className="w-5 h-5 text-[#079ADF] mt-1 shrink-0" />
                    <Link
                      href="tel:+19054341662"
                      className="hover:text-[#079ADF] transition-colors"
                    >
                      +1-905-556-3240
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <BiSolidMessage className="w-5 h-5 text-[#079ADF] mt-1 shrink-0" />
                    <Link
                      href="mailto:info@Care4Youmedical.ca"
                      className="hover:text-[#079ADF] transition-colors"
                    >
                      info@Care4Youmedical.ca
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaLink className="w-5 h-5 text-[#079ADF] mt-1 shrink-0" />
                    <Link
                      href="https://www.Care4Youmedical.ca"
                      className="hover:text-[#079ADF] transition-colors"
                    >
                      www.Care4Youmedical.ca
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3
                  className="font-bold text-[#079ADF] mb-4"
                  style={{ fontSize: Clamp(1.2, 1.5) }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <Link
                    href="https://x.com/vmcwhitby"
                    className="bg-gray-100 hover:bg-[#079ADF] text-gray-600 hover:text-white p-3 rounded-xl transition-all duration-300"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100094622814558"
                    className="bg-gray-100 hover:bg-[#079ADF] text-gray-600 hover:text-white p-3 rounded-xl transition-all duration-300"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/Care4Youmedical/"
                    className="bg-gray-100 hover:bg-[#079ADF] text-gray-600 hover:text-white p-3 rounded-xl transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
